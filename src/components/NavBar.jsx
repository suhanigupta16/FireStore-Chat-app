import React from "react";

const NavBar = () => {
  return (
    <div className="navWrapper">
      <span className="logo">Chat App</span>
      <div className="userInfo">
        <img
          src="https://images.pexels.com/photos/18528247/pexels-photo-18528247/free-photo-of-fashion-man-love-people.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
        />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default NavBar;
