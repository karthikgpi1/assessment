import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiChevronDown } from "react-icons/fi";
import pic from "../../Assets/profile-pic-01.jpg";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="leftTerms">
          <HiMenuAlt3 className="hamburger" />
          <div className="searchArea">
            <AiOutlineSearch className="searchIcon" />
            <input
              type="text"
              className="search"
              placeholder="Search transactions, invoices or help"
            />
          </div>
        </div>

        <div className="rightTerms">
          <IoMdNotificationsOutline className="notification" />
          <h1>John Doe</h1>
          <FiChevronDown className="downIcon" />
          <img src={pic} alt="profile" />
        </div>
      </div>
    </>
  );
};

export default Header;
