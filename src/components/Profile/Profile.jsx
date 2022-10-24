import React from "react";

import "./profile.css";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";

const Profile = () => {
  return (
    <div className="profileContainer">
      <div className="profile">
        <div className="profileImage">
          <img
            className="profilepic"
            src={require("../../Assets/profile-pic-01.jpg")}
          />
          <div className="editMain">
            <div className="edit1"></div>
            <FiEdit2 className="edit" />
          </div>
        </div>
        <h1 className="Pnames">Nick Herasimenka</h1>
        <h3 className="Cnames">United States</h3>
        <div className="icons">
          <BsTwitter />
          <BsFacebook />
          <BsLinkedin />
          <BsWhatsapp />
        </div>
      </div>
      <div className="userTag">
        <span className="Ousers">Our Users</span>
        <BsThreeDotsVertical />
      </div>
      <div className="users">
        <div className="user1">
          <div className="left">
            <img
              className="userImg"
              src={require("../../Assets/profile-pic-03.jpg")}
            />
            <div>
              <h1 className="name">Drew James</h1>
              <h2 className="country">United States</h2>
            </div>
          </div>
          <div className="right">
            <span className="mobile">Mobile:8715674877</span>
          </div>
        </div>
        <div className="user2">
          <div className="left">
            <img
              className="userImg"
              src={require("../../Assets/profile-pic-02.jpg")}
            />
            <div>
              <h1 className="name">Bravid kames</h1>
              <h2 className="country">United States</h2>
            </div>
          </div>
          <div className="right">
            <span className="mobile">Mobile:8715674877</span>
          </div>
        </div>
        <div className="user3">
          <div className="left">
            <img
              className="userImg"
              src={require("../../Assets/profile-pic-04.jpg")}
            />
            <div>
              <h1 className="name">Bravid kames</h1>
              <h2 className="country">United States</h2>
            </div>
          </div>
          <div className="right">
            <span className="mobile">Mobile:8715674877</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
