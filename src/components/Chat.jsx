import React from "react";
import { BsCameraVideoFill } from "react-icons/bs";
import { BiUserPlus } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import Message from "./Message";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>

        <div className="chatIcons">
          <BsCameraVideoFill />
          <BiUserPlus />
          <FiMoreHorizontal />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
