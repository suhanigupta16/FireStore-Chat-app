import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/18528247/pexels-photo-18528247/free-photo-of-young-woman-in-an-elegant-outfit-standing-on-the-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
        />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img
          src="https://images.pexels.com/photos/18528247/pexels-photo-18528247/free-photo-of-young-woman-in-an-elegant-outfit-standing-on-the-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
