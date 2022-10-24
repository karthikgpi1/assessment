import React from "react";

const NotificationInfo = () => {
  return (
    <div>
      <div className="users">
        <div className="user1">
          <div className="left">
            <img
              className="userImg"
              src={require("../../Assets/profile-pic-03.jpg")}
              alt="pic3"
            />
            <div>
              <h1 className="name">Drew James</h1>
              <h2 className="country">Assigned you on the call with sara</h2>
            </div>
          </div>
          <div className="right">
            <span className="mobile">2mins ago</span>
          </div>
        </div>
        <div className="user2">
          <div className="left">
            <img
              className="userImg"
              src={require("../../Assets/profile-pic-05.jpg")}
              alt="pic5"
            />
            <div>
              <h1 className="name">Alexa Mary</h1>
              <h2 className="country">Marked the task New UI as done</h2>
            </div>
          </div>
          <div className="right">
            <span className="mobile">5 mins ago</span>
          </div>
        </div>
        <div className="user3">
          <div className="left">
            <img
              className="userImg"
              src={require("../../Assets/profile-pic-06.jpg")}
              alt="pic6"
            />
            <div>
              <h1 className="name">Eva Maria</h1>
              <h2 className="country">Added a new comment on Sales task</h2>
            </div>
          </div>
          <div className="right">
            <span className="mobile">10mins ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationInfo;
