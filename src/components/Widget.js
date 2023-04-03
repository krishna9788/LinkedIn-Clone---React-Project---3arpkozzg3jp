import React, { useState } from "react";
import "./../styles/Widget.css";

const Widget = () => {
  const [value, setValue] = useState(true);
  const [value1, setValue1] = useState(true);
  const [value2, setValue2] = useState(true);
  const [value3, setValue3] = useState(true);
  const [value4, setValue4] = useState(true);
  const [value5, setValue5] = useState(true);
  const [value6, setValue6] = useState(true);
  const [value7, setValue7] = useState(true);
  const handleClick1 = () => {
    setValue1(!value1);
  };
  const handleClick2 = () => {
    setValue2(!value2);
  };
  const handleClick = () => {
    setValue(!value);
  };
  const handleClick3 = () => {
    setValue3(!value3);
  };
  const handleClick4 = () => {
    setValue4(!value4);
  };
  const handleClick5 = () => {
    setValue5(!value5);
  };
  const handleClick6 = () => {
    setValue6(!value6);
  };
  const handleClick7 = () => {
    setValue7(!value7);
  };
  return (
    <div className="widgets libd">
      <div className="widgets__header">
        <h2>Add to your feed</h2>
        <i className="material-icons"> info </i>
      </div>
      <div className="widgets__article">
        <div className="widgets__article--left">
          <i className="material-icons"> fiber_manual_record </i>
        </div>
        <div className="widgets__article--right">
          <h4>React Coding Challenges</h4>
          <p>Top news - 4000 readers</p>
        </div>
      </div>
      {/* add follow and unfollow button */}
      <div className="follow">
        <button className="follow_text" onClick={handleClick1}>
          {value1 ? "+ Follow" : "Unfollow"}
        </button>
      </div>

      <div className="widgets__article">
        <div className="widgets__article--left">
          <i className="material-icons"> fiber_manual_record </i>
        </div>
        <div className="widgets__article--right">
          <h4>JavaScript Coding Challenges</h4>
          <p>Top news - 5000 readers</p>
        </div>
      </div>
      <div className="follow">
        <button className="follow_text" onClick={handleClick2}>
          {value2 ? "+ Follow" : "Unfollow"}
        </button>
      </div>

      <div className="widgets__article">
        <div className="widgets__article--left">
          <i className="material-icons"> fiber_manual_record </i>
        </div>
        <div className="widgets__article--right">
          <h4>Html Coding Challenges</h4>
          <p>Top news - 2000 readers</p>
        </div>
      </div>
      <div className="follow">
        <button className="follow_text" onClick={handleClick}>
          {value ? "+ Follow" : "Unfollow"}
        </button>
      </div>
      <div className="widgets__article">
        <div className="widgets__article--left">
          <i className="material-icons"> fiber_manual_record </i>
        </div>
        <div className="widgets__article--right">
          <h4>Bootstrap Coding Challenges</h4>
          <p>Top news - 7000 readers</p>
        </div>
      </div>
      <div className="follow">
        <button className="follow_text" onClick={handleClick3}>
          {value3 ? "+ Follow" : "Unfollow"}
        </button>
      </div>

      <div className="widgets__article">
        <div className="widgets__article--left">
          <i className="material-icons"> fiber_manual_record </i>
        </div>
        <div className="widgets__article--right">
          <h4>Angular Coding Challenges</h4>
          <p>Top news - 1000 readers</p>
        </div>
      </div>
      <div className="follow">
        <button className="follow_text" onClick={handleClick4}>
          {value4 ? "+ Follow" : "Unfollow"}
        </button>
      </div>

      <div className="widgets__article">
        <div className="widgets__article--left">
          <i className="material-icons"> fiber_manual_record </i>
        </div>
        <div className="widgets__article--right">
          <h4>Java Coding Challenges</h4>
          <p>Top news - 5000 readers</p>
        </div>
      </div>
      <div className="follow">
        <button className="follow_text" onClick={handleClick5}>
          {value5 ? "+ Follow" : "Unfollow"}
        </button>
      </div>

      <div className="widgets__article">
        <div className="widgets__article--left">
          <i className="material-icons"> fiber_manual_record </i>
        </div>
        <div className="widgets__article--right">
          <h4>Python Coding Challenges</h4>
          <p>Top news - 2200 readers</p>
        </div>
      </div>
      <div className="follow">
        <button className="follow_text" onClick={handleClick6}>
          {value6 ? "+ Follow" : "Unfollow"}
        </button>
      </div>

      <div className="widgets__article">
        <div className="widgets__article--left">
          <i className="material-icons"> fiber_manual_record </i>
        </div>
        <div className="widgets__article--right">
          <h4>PHP Coding Challenges</h4>
          <p>Top news - 4500 readers</p>
        </div>
      </div>
      <div className="follow">
        <button className="follow_text" onClick={handleClick7}>
          {value7 ? "+ Follow" : "Unfollow"}
        </button>
      </div>
    </div>
  );
};

export default Widget;
