import React from "react";
import SideBar from "../components/SideBar";
import Chat from "../components/Chat";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeWrapper">
        <SideBar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
