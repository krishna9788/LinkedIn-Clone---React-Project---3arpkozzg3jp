import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./../styles/Dashboard.css";
import "./../styles/App.css";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Widget from "./Widget";
import posts from "../mock_backend/Posts";
import Card from "./Card";

const Dashboard = () => {
  const [home, setHome] = useState(true);
  const [myNetwork, setMyNetwork] = useState(false);
  const [jobs, setJobs] = useState(false);
  const [messaging, setMessaging] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.value);
  const [post, setPost] = useState("");
  const [displayPosts, setDisplayPosts] = useState(posts);
  const [togglephoto, setTogglePhoto] = useState(false);
  const [togglevideo, setToggleVideo] = useState(false);
  const [toggleevent, setToggleEvent] = useState(false);
  const [togglewriteArticle, setToggleWriteArticle] = useState(false);

  const handleDeveloper1 = () => {
    window.open(
      "https://in.indeed.com/jobs?q=Front+End+Web+Developer+Internship&vjk=67850a7d78dd5b5e&mna=&=&aceid=&gclid=CjwKCAjw5remBhBiEiwAxL2M98eFj404LUpuq7dU4VpGjTvbJiu140zSfur5jSPkvZZB0VaCcgmfhBoCdUkQAvD_BwE&gclsrc=aw.ds&from=mobRdr&utm_source=%2Fm%2F&utm_medium=redir&utm_campaign=dt/"
    );
  };
  const handleDeveloper2 = () => {
    window.open(
      "https://in.indeed.com/jobs?q=Front+End+Web+Developer+Internship&vjk=67850a7d78dd5b5e&mna=&=&aceid=&gclid=CjwKCAjw5remBhBiEiwAxL2M98eFj404LUpuq7dU4VpGjTvbJiu140zSfur5jSPkvZZB0VaCcgmfhBoCdUkQAvD_BwE&gclsrc=aw.ds&from=mobRdr&utm_source=%2Fm%2F&utm_medium=redir&utm_campaign=dt/"
    );
  };
  const handleDeveloper3 = () => {
    window.open(
      "https://in.indeed.com/jobs?q=Front+End+Web+Developer+Internship&vjk=67850a7d78dd5b5e&mna=&=&aceid=&gclid=CjwKCAjw5remBhBiEiwAxL2M98eFj404LUpuq7dU4VpGjTvbJiu140zSfur5jSPkvZZB0VaCcgmfhBoCdUkQAvD_BwE&gclsrc=aw.ds&from=mobRdr&utm_source=%2Fm%2F&utm_medium=redir&utm_campaign=dt/"
    );
  };
  const handleDeveloper4 = () => {
    window.open(
      "https://in.indeed.com/jobs?q=Front+End+Web+Developer+Internship&vjk=67850a7d78dd5b5e&mna=&=&aceid=&gclid=CjwKCAjw5remBhBiEiwAxL2M98eFj404LUpuq7dU4VpGjTvbJiu140zSfur5jSPkvZZB0VaCcgmfhBoCdUkQAvD_BwE&gclsrc=aw.ds&from=mobRdr&utm_source=%2Fm%2F&utm_medium=redir&utm_campaign=dt/"
    );
  };
  const handleDeveloper5 = () => {
    window.open(
      "https://in.indeed.com/jobs?q=Front+End+Web+Developer+Internship&vjk=67850a7d78dd5b5e&mna=&=&aceid=&gclid=CjwKCAjw5remBhBiEiwAxL2M98eFj404LUpuq7dU4VpGjTvbJiu140zSfur5jSPkvZZB0VaCcgmfhBoCdUkQAvD_BwE&gclsrc=aw.ds&from=mobRdr&utm_source=%2Fm%2F&utm_medium=redir&utm_campaign=dt/"
    );
  };

  const display = (postData) => {
    setDisplayPosts(postData);
  };

  const handlePost = (e) => {
    e.preventDefault();
    console.log(post)
    if (post === "") {
      setFlag(true);
      console.log("true");
      console.log("please write post")
    }
    else {
      setFlag(false);
      console.log("false");
      posts.unshift({
        id: displayPosts.length + 1,
        initial: user.name.slice(0, 1).toUpperCase(),
        name: user.name,
        description: "User",
        post: post,
        likes: new Set(),
        comments: [],
      });
      setDisplayPosts([...posts]);
      setPost("");
    }
    
  };

  useEffect(() => {
    if (user.isLoggedIn === false) navigate("/");
    else console.log(user);
  }, []);

  return (
    <div className="dashboard">
      <Navbar
        setHome={setHome}
        setMyNetwork={setMyNetwork}
        setJobs={setJobs}
        setMessaging={setMessaging}
        setNotifications={setNotifications}
      />
      <div className="body__main">
        <Sidebar />

        {/* home */}

        {home && (
          <>
            <div className="feed">
              <div className="dashboard_user">
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
              </div>
              <div className="feed__input--container libd">
                <div className="feed__input--wrapper">
                  <div className="account__avatar">
                    <div className="account__avatar--img"></div>
                  </div>
                  <form className="feed__input" onSubmit={handlePost}>
                    <input
                      type="text"
                      value={post}
                      placeholder="Start a post"
                      onChange={(e) => {
                        if (togglevideo === true) {
                          setToggleVideo(false);
                        }
                        if (toggleevent === true) {
                          setToggleEvent(false);
                        }
                        if (togglewriteArticle === true) {
                          setToggleWriteArticle(false);
                        }
                        if (togglephoto === true) {
                          setTogglePhoto(false);
                        }
                        setPost(e.target.value);
                      }}
                    />
                    <div className="error">
                      {flag ? <p>please write</p> : ""}
                    </div>
                    <button type="submit">Send</button>
                  </form>
                </div>
                <div className="feed__input--options working_on_div ">
                  {togglephoto ? (
                    <p className="working_on_div__pad">
                      working on photo festures
                    </p>
                  ) : (
                    ""
                  )}
                  {togglevideo ? (
                    <p className="working_on_div__pad">
                      working on video festures
                    </p>
                  ) : (
                    ""
                  )}
                  {toggleevent ? (
                    <p className="working_on_div__pad">
                      working on event festures
                    </p>
                  ) : (
                    ""
                  )}
                  {togglewriteArticle ? (
                    <p className="working_on_div__pad">
                      working on write article
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="feed__input--options">
                  <div
                    className="input__option"
                    onClick={() => {
                      setTogglePhoto(!togglephoto);
                      if (togglevideo === true) {
                        setToggleVideo(false);
                      }
                      if (toggleevent === true) {
                        setToggleEvent(false);
                      }
                      if (togglewriteArticle === true) {
                        setToggleWriteArticle(false);
                      }
                    }}
                  >
                    <i style={{ color: "#70b5f9" }} className="material-icons">
                      {" "}
                      insert_photo{" "}
                    </i>
                    <h4>Photo</h4>
                  </div>
                  <div
                    className="input__option"
                    onClick={() => {
                      setToggleVideo(!togglevideo);
                      if (togglephoto === true) {
                        setTogglePhoto(false);
                      }
                      if (toggleevent === true) {
                        setToggleEvent(false);
                      }
                      if (togglewriteArticle === true) {
                        setToggleWriteArticle(false);
                      }
                    }}
                  >
                    <i style={{ color: "#7fc15e" }} className="material-icons">
                      {" "}
                      subscriptions{" "}
                    </i>
                    <h4>Video</h4>
                  </div>
                  <div
                    className="input__option"
                    onClick={() => {
                      setToggleEvent(!toggleevent);
                      if (togglevideo === true) {
                        setToggleVideo(false);
                      }
                      if (togglephoto === true) {
                        setTogglePhoto(false);
                      }
                      if (togglewriteArticle === true) {
                        setToggleWriteArticle(false);
                      }
                    }}
                  >
                    <i style={{ color: "#e7a33e" }} className="material-icons">
                      {" "}
                      event_note{" "}
                    </i>
                    <h4>Event</h4>
                  </div>
                  <div
                    className="input__option"
                    onClick={() => {
                      setToggleWriteArticle(!togglewriteArticle);
                      if (togglevideo === true) {
                        setToggleVideo(false);
                      }
                      if (togglephoto === true) {
                        setTogglePhoto(false);
                      }
                      if (toggleevent === true) {
                        setToggleEvent(false);
                      }
                    }}
                  >
                    <i style={{ color: "#fc9295" }} className="material-icons">
                      {" "}
                      calendar_view_day{" "}
                    </i>
                    <h4>Write Article</h4>
                  </div>
                </div>
              </div>

              {displayPosts.map((e) => (
                <div key={e.id}>
                  <Card e={e} display={display} />
                </div>
              ))}
            </div>
          </>
        )}

        {/* myNetwork */}

        {myNetwork && (
          <>
            <div className="navbar_containeer">
              <div className="dashboard_user">
                <div className="sidebar__top libd navbar___div">
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
              </div>
              <div className="navbar___div">
                <h2 className="deslist">My Network</h2>
                <p>Inviations</p>
                <div className="jobs_container">
                  <div className="image_container">
                    <div>
                      <img
                        className="imagejobs_width"
                        src="https://media.licdn.com/dms/image/D5635AQHg7UIkWhDcLQ/profile-framedphoto-shrink_800_800/0/1690610380934?e=1691852400&v=beta&t=w9dXre3cbjyjdBSj4DSHH5MAuTh000bXOaq-UD7RYR8"
                      ></img>
                    </div>
                    <div className="pad_-left">
                      <p className="para_head_black">Parathamesh Dalvi</p>
                      <p className="para_detail">
                        Student at the New Collage, Kolhapur
                      </p>
                    </div>
                  </div>
                  <div className="image_container">
                    <p className="pad_-leftfg">
                      <h5>Ignore</h5>
                    </p>
                    <p className="pad_-leftfg_button">Accept</p>
                  </div>
                </div>
                <div className="jobs_container">
                  <div className="image_container">
                    <div>
                      <img
                        className="imagejobs_width"
                        src="https://media.licdn.com/dms/image/D5635AQH_uBiP07irFg/profile-framedphoto-shrink_800_800/0/1678951965606?e=1691852400&v=beta&t=C2nT858b053nVpkmhu39vRiH6rKGwmLd5zftWjNWFsc"
                      ></img>
                    </div>
                    <div className="pad_-left">
                      <p className="para_head_black">Vardhan Choudhary</p>
                      <p className="para_detail">Student on Newton School</p>
                    </div>
                  </div>
                  <div className="image_container">
                    <p className="pad_-leftfg">
                      <h5>Ignore</h5>
                    </p>
                    <p className="pad_-leftfg_button">Accept</p>
                  </div>
                </div>
                <p>Connections</p>
                <div className="mynetwork_container">
                  <div className="left_mynetwork_container">
                    <img
                      className="imagejobs_width"
                      src="https://media.licdn.com/dms/image/D4D03AQGzp9uW--HeLg/profile-displayphoto-shrink_200_200/0/1674651426428?e=1696464000&v=beta&t=d8oNFpIYoiuwiZ2ZyXJ87TfiEbtcFhzNwOWGDnT7f4Q"
                    ></img>
                    <p className="para_head_black">Anoop Patel</p>
                    <p className="mynetwork_textd">---</p>
                    <div>
                      <p className="mynetwork_text">Based on your profile</p>
                      <button className="mynetwork_button">
                        &#xf234; Connect
                      </button>
                    </div>
                  </div>
                  <div className="left_mynetwork_container">
                    <img
                      className="imagejobs_width"
                      src="https://media.licdn.com/dms/image/C4D03AQHBnl7Bnzio3Q/profile-displayphoto-shrink_200_200/0/1658558549399?e=1696464000&v=beta&t=6nxC2YVROaUY6T_BrgbNCPNB_6Yy0nX7mHNHsy3GVps"
                    ></img>
                    <p className="para_head_black">Akash Patel</p>
                    <p className="mynetwork_textd">
                      Student at trs collage rewa m.p.
                    </p>
                    <div>
                      <p className="mynetwork_text">Based on your profile</p>
                      <button className="mynetwork_button">
                        &#xf234; Connect
                      </button>
                    </div>
                  </div>
                  <div className="left_mynetwork_container">
                    <img
                      className="imagejobs_width"
                      src="https://media.licdn.com/dms/image/D5635AQF1wezS-x1faw/profile-framedphoto-shrink_200_200/0/1641745623329?e=1691856000&v=beta&t=FNTleAlVVLgnlSo77X2S69zwuFen0N-UrnkbpeCD-wk"
                    ></img>
                    <p className="para_head_black">Mahendra Singh</p>
                    <p className="mynetwork_textd">Fresher</p>
                    <div>
                      <p className="mynetwork_text">Based on your profile</p>
                      <button className="mynetwork_button">
                        &#xf234; Connect
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* jobs */}

        {jobs && (
          <>
            <div className="navbar_containeer">
              <div className="dashboard_user">
                <div className="sidebar__top libd navbar___div">
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
              </div>

              <div className="navbar___div">
                <div>
                  <h2 className="deslist">Jobs</h2>
                  <p className="jobs__heading">Recommended for you</p>
                  <p>based on your profile and search history</p>
                </div>
                <div className="jobs_container" onClick={handleDeveloper1}>
                  <div className="image_container">
                    <div>
                      <img
                        className="imagejobs_width"
                        src="https://media.licdn.com/dms/image/C560BAQFSVDtroiTPVg/company-logo_100_100/0/1662729127883?e=1699488000&v=beta&t=z8Do14LR9jH-m6KnqCEc6XPGhbyjDhQmY51tUtN97lU"
                      ></img>
                    </div>
                    <div className="pad_-left">
                      <p className="para_head">Frontend Developer Internship</p>
                      <p className="para_text">Serenade Story</p>
                      <p className="para_detail">
                        Jakarta Metropolitan Area (Remote)
                      </p>
                    </div>
                  </div>
                  <div className="image_container">
                    <p className="pad_-leftfg">&#128065;</p>
                    <p className="pad_-leftfg">&#xf097;</p>
                  </div>
                </div>
                <div className="jobs_container" onClick={handleDeveloper2}>
                  <div className="image_container">
                    <div>
                      <img
                        className="imagejobs_width"
                        src="https://media.licdn.com/dms/image/D4D0BAQHuVyjNBeQv9Q/company-logo_100_100/0/1684438608581?e=1699488000&v=beta&t=duZGuZih5PTjczPPKrlAgcyuRbbuFWMndJA0DNe8ZDk"
                      ></img>
                    </div>
                    <div className="pad_-left">
                      <p className="para_head">
                        Frontend Engineer (4800 USD/Mes)
                      </p>
                      <p className="para_text">Listopro</p>
                      <p className="para_detail">Mexico (Remote)</p>
                    </div>
                  </div>
                  <div className="image_container">
                    <p className="pad_-leftfg">&#128065;</p>
                    <p className="pad_-leftfg">&#xf097;</p>
                  </div>
                </div>
                <div className="jobs_container" onClick={handleDeveloper3}>
                  <div className="image_container">
                    <div>
                      <img
                        className="imagejobs_width"
                        src="https://media.licdn.com/dms/image/D4D0BAQHB79AE71th8A/company-logo_100_100/0/1688472201106?e=1699488000&v=beta&t=stqdit685lSOKT-5G3ON-JBVnPJsPV7FppUZUVf9koQ"
                      ></img>
                    </div>
                    <div className="pad_-left">
                      <p className="para_head">
                        Junior Web Front-End Developer
                      </p>
                      <p className="para_text">Turing</p>
                      <p className="para_detail">Mexico (Remote)</p>
                    </div>
                  </div>
                  <div className="image_container">
                    <p className="pad_-leftfg">&#128065;</p>
                    <p className="pad_-leftfg">&#xf097;</p>
                  </div>
                </div>
                <div className="jobs_container" onClick={handleDeveloper4}>
                  <div className="image_container">
                    <div>
                      <img
                        className="imagejobs_width"
                        src="https://media.licdn.com/dms/image/D4E0BAQHT3hcIDOgL_Q/company-logo_100_100/0/1688367359134?e=1699488000&v=beta&t=zuzwPR8_1lfAh8UOvcAnhZE7_5bNmr42biZVjxk3Xbw"
                      ></img>
                    </div>
                    <div className="pad_-left">
                      <p className="para_head">Frontend Developer</p>
                      <p className="para_text">Noir</p>
                      <p className="para_detail">
                        Manchester Area, United Kingdom (Hybrid)
                      </p>
                    </div>
                  </div>
                  <div className="image_container">
                    <p className="pad_-leftfg">&#128065;</p>
                    <p className="pad_-leftfg">&#xf097;</p>
                  </div>
                </div>
                <div className="jobs_container" onClick={handleDeveloper5}>
                  <div className="image_container">
                    <div>
                      <img
                        className="imagejobs_width"
                        src="https://media.licdn.com/dms/image/D4D0BAQHl2YaMYr-thA/company-logo_100_100/0/1688623900493?e=1699488000&v=beta&t=_5b9fbvcwtpQ0fID_83MCLXhTKYYCX9PZ9eANKMewwE"
                      ></img>
                    </div>
                    <div className="pad_-left">
                      <p className="para_head">Frontend Developer</p>
                      <p className="para_text">Infosys</p>
                      <p className="para_detail">Mexico (Remote)</p>
                    </div>
                  </div>
                  <div className="image_container">
                    <p className="pad_-leftfg">&#128065;</p>
                    <p className="pad_-leftfg">&#xf097;</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* messaging */}

        {messaging && (
          <>
            <div className="navbar_containeer">
              <div className="dashboard_user">
                <div className="sidebar__top libd navbar___div">
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
              </div>
              <div className="navbar___div">
                <h2 className="deslist">Message</h2>
                <div className="jobs_container">
                  <div className="image_container">
                    <div>
                      <img
                        className="imagejobs_width"
                        src="https://media.licdn.com/dms/image/C5603AQG6a8xUx1903g/profile-displayphoto-shrink_200_200/0/1658678051859?e=1696464000&v=beta&t=Mjj0t9UubDRovCVdKkzb0OBKlR6Lje1eMnde84khzDU"
                      ></img>
                    </div>
                    <div className="pad_-left">
                      <p className="para_head_black">Sumit Saxena</p>
                      <p className="para_detail">Welcome dear</p>
                    </div>
                  </div>
                  <div className="image_container">
                    <p className="pad_-leftfg">Aug 16, 2022</p>
                  </div>
                </div>
                <div className="jobs_container">
                  <div className="image_container">
                    <div>
                      <img
                        className="imagejobs_width"
                        src="https://media.licdn.com/dms/image/C4D03AQHg9uUyBFbajA/profile-displayphoto-shrink_200_200/0/1655373910785?e=1696464000&v=beta&t=f9pc7H8ku_VrsoswUl8hwIJljT9tGkAtyCIjx1GYN5g"
                      ></img>
                    </div>
                    <div className="pad_-left">
                      <p className="para_head_black">Anshu Agrawal</p>
                      <p className="para_detail">Full stack web development</p>
                    </div>
                  </div>
                  <div className="image_container">
                    <p className="pad_-leftfg">Aug 02, 2022</p>
                  </div>
                </div>
                <div className="jobs_container">
                  <div className="image_container">
                    <div>
                      <img
                        className="imagejobs_width"
                        src="https://media.licdn.com/dms/image/D4D35AQGf9fjC08tUUA/profile-framedphoto-shrink_200_200/0/1690979960056?e=1691848800&v=beta&t=BBSDJ82kSzSVrW3CIm9ftiUkh74315D7bMrWzAf4g5g"
                      ></img>
                    </div>
                    <div className="pad_-left">
                      <p className="para_head_black">Sanju Sharma</p>
                      <p className="para_detail">thank you</p>
                    </div>
                  </div>
                  <div className="image_container">
                    <p className="pad_-leftfg">July 28, 2022</p>
                  </div>
                </div>
                <div className="jobs_container">
                  <div className="image_container">
                    <div>
                      <img
                        className="imagejobs_width"
                        src="https://media.licdn.com/dms/image/C4D03AQGirYuutBlmaA/profile-displayphoto-shrink_200_200/0/1644506840172?e=1696464000&v=beta&t=VhvT9dY20YBRZr3aTCkTcZkjVIqMCCrZJnI9BuAKcM4"
                      ></img>
                    </div>
                    <div className="pad_-left">
                      <p className="para_head_black">Nidhish Bhatnagar</p>
                      <p className="para_detail">fine Sir</p>
                    </div>
                  </div>
                  <div className="image_container">
                    <p className="pad_-leftfg">July 16, 2022</p>
                  </div>
                </div>
                <div className="jobs_container">
                  <div className="image_container">
                    <div>
                      <img
                        className="imagejobs_width"
                        src="https://media.licdn.com/dms/image/D4D03AQEMkIH-wiOo3A/profile-displayphoto-shrink_200_200/0/1667611573791?e=1696464000&v=beta&t=Y20Q8XnY-xYGiCsJMlyxeOJjd1EOpNVNusHSsgUU9BM"
                      ></img>
                    </div>
                    <div className="pad_-left">
                      <p className="para_head_black">Himanshu Joshi</p>
                      <p className="para_detail">Thank You Sir</p>
                    </div>
                  </div>
                  <div className="image_container">
                    <p className="pad_-leftfg">May 16, 2022</p>
                  </div>
                </div>
                <div className="jobs_container">
                  <div className="image_container">
                    <div>
                      <img
                        className="imagejobs_width"
                        src="https://media.licdn.com/dms/image/D4D03AQE0C2_Ozc93vg/profile-displayphoto-shrink_200_200/0/1670053529053?e=1696464000&v=beta&t=at_GMgJedNLOzNvXGR06BdoToEUR5_u_7wwSBGvm5DQ"
                      ></img>
                    </div>
                    <div className="pad_-left">
                      <p className="para_head_black">Aman Namdev</p>
                      <p className="para_detail">okk</p>
                    </div>
                  </div>
                  <div className="image_container">
                    <p className="pad_-leftfg">Feb 10, 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* notifications */}

        {notifications && (
          <>
            <div className="navbar_containeer">
              <div className="dashboard_user">
                <div className="sidebar__top libd navbar___div">
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
              </div>
              <div className="navbar___div">
                <h2 className="deslist">Notifications</h2>
                <div className="jobs_container">
                  <div className="image_container">
                    <div>
                      <img
                        className="imagejobs_width"
                        src="https://media.licdn.com/dms/image/D4D0BAQHl2YaMYr-thA/company-logo_100_100/0/1688623900493?e=1699488000&v=beta&t=_5b9fbvcwtpQ0fID_83MCLXhTKYYCX9PZ9eANKMewwE"
                      ></img>
                    </div>
                    <div className="pad_-left">
                      <p className="para_detail">
                        <span className="para_text">Pranav Malik</span> posted:
                        MADAIgos is hiring please apply
                      </p>
                    </div>
                  </div>
                  <div className="image_container">
                    <p className="pad_-leftfg pad_-leftffont">&#8230;</p>
                  </div>
                </div>
                <div className="jobs_container">
                  <div className="image_container">
                    <div>
                      <img
                        className="imagejobs_width"
                        src="https://media.licdn.com/dms/image/D4E0BAQFFLPdR-R9FWA/company-logo_100_100/0/1688389218865?e=1699488000&v=beta&t=z_bgWYFLwAPMsi4O8kDPqaebeHZymZDBSHrJjRdOUKQ"
                      ></img>
                    </div>
                    <div className="pad_-left">
                      <p className="para_detail">
                        Now hiring:
                        <span className="para_text"> web developer </span>
                        jobs in
                        <span className="para_text"> India </span>
                        for your job alert
                      </p>
                    </div>
                  </div>
                  <div className="image_container">
                    <p className="pad_-leftfg pad_-leftffont">&#8230;</p>
                  </div>
                </div>
                <div className="jobs_container">
                  <div className="image_container">
                    <div>
                      <img
                        className="imagejobs_width"
                        src="https://media.licdn.com/dms/image/C4D0BAQHG9-3tQBFNGg/company-logo_100_100/0/1655230767724?e=1699488000&v=beta&t=ly2E74bOWdIsHZh77wnX-ywMLpyP3AkqEvNKgB6JeRg"
                      ></img>
                    </div>
                    <div className="pad_-left">
                      <p className="para_detail">
                        Now hiring:
                        <span className="para_text"> software engineer </span>
                        jobs in
                        <span className="para_text"> India </span>
                        for your job alert
                      </p>
                    </div>
                  </div>
                  <div className="image_container">
                    <p className="pad_-leftfg pad_-leftffont">&#8230;</p>
                  </div>
                </div>
                <div className="jobs_container">
                  <div className="image_container">
                    <div>
                      <img
                        className="imagejobs_width"
                        src="https://media.licdn.com/dms/image/C4D0BAQHu-o4jvxOflw/company-logo_100_100/0/1654059736253?e=1699488000&v=beta&t=m9LRXv8vxdvdjCiA-dRfIx4Q5Oqq3gLqfdmc-5FIi-c"
                      ></img>
                    </div>
                    <div className="pad_-left">
                      <p className="para_detail">
                        Now hiring:
                        <span className="para_text"> full stack engineer </span>
                        jobs in
                        <span className="para_text"> India </span>
                        for your job alert
                      </p>
                    </div>
                  </div>
                  <div className="image_container">
                    <p className="pad_-leftfg pad_-leftffont">&#8230;</p>
                  </div>
                </div>
                <div className="jobs_container">
                  <div className="image_container">
                    <div>
                      <img
                        className="imagejobs_width"
                        src="https://media.licdn.com/dms/image/D4D0BAQHboyesc4EbaQ/company-logo_100_100/0/1686777665914?e=1699488000&v=beta&t=F3UQNaE2TuBoySye67__vFnaOM5_l7eCwWgYj7uciU0"
                      ></img>
                    </div>
                    <div className="pad_-left">
                      <p className="para_detail">
                        You appeared in
                        <span className="para_text"> 14 search </span> in this
                        week.
                      </p>
                    </div>
                  </div>
                  <div className="image_container">
                    <p className="pad_-leftfg pad_-leftffont">&#8230;</p>
                  </div>
                </div>
                <div className="jobs_container">
                  <div className="image_container">
                    <div>
                      <img
                        className="imagejobs_width"
                        src="https://media.licdn.com/dms/image/D4D35AQFOiJtr2rjtBQ/profile-framedphoto-shrink_100_100/0/1689854045700?e=1691848800&v=beta&t=Y8pGDSPhJ2CPFuW0QfC8h2HC6EjrjvCweWGn91okXQI"
                      ></img>
                    </div>
                    <div className="pad_-left">
                      <p className="para_detail">
                        You may know
                        <span className="para_text"> Anand Dewangan, </span> Add
                        to your network.
                      </p>
                    </div>
                  </div>
                  <div className="image_container">
                    <p className="pad_-leftfg pad_-leftffont">&#8230;</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        <Widget />
      </div>
    </div>
  );
};

export default Dashboard;
