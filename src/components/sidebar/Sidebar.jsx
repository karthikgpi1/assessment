import React, { useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiHomeLine } from "react-icons/ri";
import { BsFileBarGraph } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { CgMenuBoxed } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import pic from "../../Assets/profile-pic-01.jpg";
import Areachart from "../Charts/Areachart";

const Sidebar = () => {
  const [show, setShow] = useState(false);

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
            <IoMdNotificationsOutline className="notification" />
            <h1>John Doe</h1>
            <FiChevronDown className="downIcon" />
            <img src={pic} alt="profile" />
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
                <IoMailOutline className=" nav-link-icon" />
                <span className="nav-link-name">Inbox</span>
                <span className="nav-new">new</span>
              </Link>
              <Link to="/products" className="nav-link">
                <CgMenuBoxed className=" nav-link-icon" />
                <span className="nav-link-name">Products</span>
              </Link>
              <Link to="/admin" className="nav-link">
                <IoSettingsOutline className=" nav-link-icon" />
                <span className="nav-link-name">Admin</span>
              </Link>
            </div>
          </div>
        </nav>
      </aside>
      <div className={`test ${show ? "space-toggle" : null}`}>
        <span>
          <h1>Overview</h1>
        </span>
        <span>
          <button>Add funds</button>
        </span>
      </div>
      <div className={`grid ${show ? "space-toggle" : null}`}>
        <div className="grid1">
          <div>sdnvhfbvhfhvehfrgvgr</div>
          <div>sdnvhfbvhfhvehfrgvgr</div>
        </div>
        <div className="grid2">
          <Areachart />
        </div>
        <div className="grid3">sdnvhfbvhfhvehfrgvgr4</div>
        <div className="grid4">sdnvhfbvhfhvehfrgvgrsdbhdkhbhksdbvhk3</div>
        <div className="grid5">sdnvhfbvhfhvehfrgvgr5</div>
      </div>
    </main>
  );
};

export default Sidebar;
