import React from "react";
import { useSelector } from "react-redux";
import "./../styles/Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const user = useSelector((state) => state.user.value);
  const handleDeveloper = () => {
    window.open("https://developers.google.com/");
  };
  const handleDesign = () => {
    window.open(
      "https://medium.com/@Vincentxia77/beginners-guide-how-to-learn-web-designing-at-home-796c01b8c0c2/"
    );
  };
  const handleSoftwareEngineering = () => {
    window.open(
      "https://resources.workable.com/software-engineer-job-description/"
    );
  };
  const handleProgramming = () => {
    window.open("https://www.coursera.org/articles/what-is-programming/");
  };
  const handleReactjs = () => {
    window.open("https://legacy.reactjs.org/");
  };
  return (
    <div className="sidebar">
      <div className="sidebar__top libd">
        <img
          src="https://static-exp1.licdn.com/sc/h/55k1z8997gh8dwtihm11aajyq"
          alt=""
        />
        <div className="account__avatar">
          <div className="account__avatar--img"></div>
        </div>
        <h2>{user.name}</h2>
        <h4>{user.username}</h4>
      </div>

      <div className="sidebar__stats libd">
        <div className="sidebar__stat">
          <p>Who Viewed You</p>
          <p className="sidebar__stat--number">1523</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__stat--number">2549</p>
        </div>
      </div>

      <div className="sidebar__bottom libd">
        <p>Recent</p>
        <div className="sidebar__recent--item">
          <span className="sidebar__hash">#</span>
          <p onClick={handleReactjs}>reactjs</p>
        </div>
        <div className="sidebar__recent--item">
          <span className="sidebar__hash">#</span>
          <p onClick={handleProgramming}>programming</p>
        </div>
        <div className="sidebar__recent--item">
          <span className="sidebar__hash">#</span>
          <p onClick={handleSoftwareEngineering}>softwareengineering</p>
        </div>
        <div className="sidebar__recent--item">
          <span className="sidebar__hash">#</span>
          <p onClick={handleDesign}>design</p>
        </div>
        <div className="sidebar__recent--item">
          <span className="sidebar__hash">#</span>
          <p onClick={handleDeveloper}>developer</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
