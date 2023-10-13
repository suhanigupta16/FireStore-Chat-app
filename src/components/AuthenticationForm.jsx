import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth, db, storage } from "../config/Configure";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { AiOutlineFileAdd } from "react-icons/ai";

const AuthenticationForm = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
  });

  const validateForm = () => {
    let isValid = true;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const newError = {
      nameError: "",
      emailError: "",
      passwordError: "",
    };
    if (isSignUp && inputData.name.trim() === "") {
      newError.nameError = "Please enter a name";
      isValid = false;
    }

    if (!emailPattern.test(inputData.email)) {
      newError.emailError = "Please enter a valid email";
      isValid = false;
    }
    if (!passwordPattern.test(inputData.password)) {
      newError.passwordError =
        "Please enter a valid password including atleast 1 uppercase,special character and number";
      isValid = false;
    }
    setError(newError);
    return isValid;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        if (validateForm()) {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            inputData.email,
            inputData.password
          );
          const user = userCredential.user;
          const storageRef = ref(storage, displayName);

          await uploadBytesResumable(storageRef, file).then(() => {
            getDownloadURL(storageRef).then(async (downloadURL) => {
              try {
                //Update profile
                await updateProfile(res.user, {
                  displayName,
                  photoURL: downloadURL,
                });
                //create user on firestore
                await setDoc(doc(db, "users", res.user.uid), {
                  uid: res.user.uid,
                  displayName,
                  email,
                  photoURL: downloadURL,
                });

                //create empty user chats on firestore
                await setDoc(doc(db, "userChats", res.user.uid), {});
                navigate("/");
              } catch (err) {
                console.log(err);
              }
            });
          });
        }
        toast.success("User registered successfully");
        setIsSignUp(false);

        // } else {
        //   toast.error("Please resolve error first");
        // }
      } else {
        if (validateForm()) {
          const data = {
            email: inputData.email,
            password: inputData.password,
          };
          const userCredential = await signInWithEmailAndPassword(
            auth,
            data.email,
            data.password
          );
          const user = userCredential.user;
          console.log(
            "🚀 ~ file: AuthenticationForm.jsx:90 ~ handleSubmit ~ user:",
            user
          );
          toast.success("User loggedIn successfully");
        } else {
          console.log("Please resolve error first");
        }
      }
    } catch (error) {
      toast.error("Failed to loggedIn");
    }

    setInputData({ ...inputData, name: "", email: "", password: "" });
  };
  return (
    <div className="formContainer">
      <ToastContainer />
      <div className="formWrapper">
        <span className="header">{isSignUp ? "SignUp" : "Login"}</span>

        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <>
              <input
                type="text"
                name="name"
                value={inputData.name}
                placeholder="Enter your name"
                onChange={handleChange}
              />
              <div>{error.nameError}</div>
            </>
          )}
          <input
            type="email"
            name="email"
            value={inputData.email}
            placeholder="Enter your email"
            onChange={handleChange}
          />
          <div>{error.emailError}</div>
          <input
            type="password"
            name="password"
            value={inputData.password}
            placeholder="Enter your password"
            onChange={handleChange}
          />
          {isSignUp && (
            <>
              <input
                required
                style={{ display: "none" }}
                type="file"
                id="file"
              />
              <label htmlFor="file">
                <AiOutlineFileAdd className="addIcon" />
                <span>Add an avatar</span>
              </label>
            </>
          )}

          <div>{error.passwordError}</div>
          <button type="submit">{isSignUp ? "SignUp" : "Login"}</button>
        </form>
        <p onClick={() => setIsSignUp(!isSignUp)} className="addIcon">
          {isSignUp ? (
            <div>
              Already have an account? <span className="auth">Login here</span>
            </div>
          ) : (
            <div>
              Don't have an account? <span className="auth">Sign Up here</span>
            </div>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthenticationForm;
