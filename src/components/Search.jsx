import React from "react";

const Search = () => {
  return (
    <div className="searchWrapper">
      <div className="searchForm">
        <input type="search" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/18528247/pexels-photo-18528247/free-photo-of-fashion-man-love-people.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
        />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
