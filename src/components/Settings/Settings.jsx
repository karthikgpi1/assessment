import React from "react";
import "./settings.css";
import { AiOutlineUser } from "react-icons/ai";
import { RiBillLine } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className="settings">
      <Link to="/myProfile" className="Mp">
        <AiOutlineUser />

        <span className="mProfile">My Profile</span>
      </Link>
      <Link to="/billing" className="Mp">
        <RiBillLine />

        <span className="Billing">Billing</span>
      </Link>
      <Link to="/logout" className="Mp">
        <IoIosLogOut />

        <span className="logout">Logout</span>
      </Link>
    </div>
  );
};

export default Settings;
