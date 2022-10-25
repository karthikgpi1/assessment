import React, { useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiHomeLine } from "react-icons/ri";
import { BsFileBarGraph } from "react-icons/bs";
// import { IoMailOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CgMenuBoxed } from "react-icons/cg";
// import { IoSettingsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import pic from "../../Assets/profile-pic-01.jpg";
import Areachart from "../Charts/Areachart";
import DonutChart from "../Charts/DonutChart";
import { TableDatas } from "../Table/TableDatas";
import VideoFile from "../video/VideoFile";
import Profile from "../Profile/Profile";
import NotificationInfo from "../NotificationInfo/NotificationInfo";
import Settings from "../Settings/Settings";
const Sidebar = () => {
  const [show, setShow] = useState(false);
  const [showSettings, setShowSettings] = useState(true);
  const [showUpIcon, setShowUpIcon] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [showActiveNotification, setShowActiveNotification] = useState(true);

  return (
    <main className={show ? "space-toggle" : null}>
      <header className={`header ${show ? "space-toggle" : null}`}>
        <div className="leftTerms">
          <div className="header-toggle" onClick={() => setShow(!show)}>
            <HiMenuAlt3 />
          </div>
          <div className="searchTerms">
            <AiOutlineSearch className="searchIcon" />
            <input
              type="text"
              className="search"
              placeholder="Search transactions, invoices or help"
            />
          </div>
        </div>

        <div>
          <div className="rightTerms">
            <IoMdNotificationsOutline
              className="notification"
              onClick={() => {
                setShowNotification(!showNotification);
                setShowActiveNotification(!showNotification);
              }}
            />
            <div
              className={`activeNotification ${
                showActiveNotification ? "block" : "ActiveShowNotification"
              }`}
            ></div>
            <h1 className="ProName">John Doe</h1>
            <FiChevronDown
              className={`downIcon ${showUpIcon ? "Rotate" : null}`}
              onClick={() => {
                setShowSettings(!showSettings);
                setShowUpIcon(!showUpIcon);
              }}
            />
            <FiChevronUp className="UpIcon" />
            <img className="userProfile" src={pic} alt="profile" />{" "}
          </div>
        </div>
      </header>

      <aside className={`sidebar ${show ? "show" : null}`}>
        <nav className="nav">
          <div>
            <Link to="/" className="nav-logo">
              <span className="nav-logo-name">ACME</span>
            </Link>

            <div className="nav-list">
              <Link to="/home" className="nav-link ">
                <RiHomeLine className=" nav-link-icon" />
                <span className="nav-link-name">Home</span>
              </Link>
              <Link to="/dashboard" className="nav-link active">
                <BsFileBarGraph className=" nav-link-icon" />
                <span className="nav-link-name">Dashboard</span>
              </Link>
              <Link to="/inbox" className="nav-link">
                <CiMail className=" nav-link-icon" />
                <span className="nav-link-name">Inbox</span>
                <span className="nav-new">new</span>
              </Link>
              <Link to="/products" className="nav-link">
                <CgMenuBoxed className=" nav-link-icon" />
                <span className="nav-link-name">Products</span>
              </Link>
              <Link to="/admin" className="nav-link">
                <CiSettings className=" nav-link-icon" />
                <span className="nav-link-name">Admin</span>
              </Link>
            </div>
          </div>
        </nav>
      </aside>
      <div className={`home ${show ? "space-toggle1" : null}`}>
        <div
          className={`notificationInfo ${
            showNotification ? "activeNotifications" : "none"
          }`}
        >
          <NotificationInfo />
          <div className="ShowMore">Show More</div>
        </div>
        <div
          className={`Psettings ${showSettings ? "activeSettings" : "none"}`}
        >
          <Settings />
        </div>
        <div className={`test ${show ? "" : null}`}>
          <span>
            <h2>Overview</h2>
          </span>
          <span className="Button">
            <button>Add Funds </button>
            <div className="plus">+</div>
          </span>
        </div>
        <div className="grid">
          <div className="grid1">
            <div className="areaText">
              <h1 className="statistics">Statistics</h1>
              <div className="months">
                <h3 className="month">Last 6 months</h3>
                <FiChevronDown className="DownIcon1" />
              </div>
            </div>
            <Areachart />
          </div>
          <div className="grid2">
            <div className="areaText">
              <h1 className="salesDistribution">Sales Distribution</h1>
            </div>
            <DonutChart />
          </div>
          <div className="grid3">
            <Profile />
          </div>
          <div className="grid4">
            <TableDatas />
          </div>

          <div className="grid5">
            <div>
              <div className="videoFile">
                <VideoFile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Sidebar;
