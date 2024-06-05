import React from "react";
import "./MsgHeader.css";

const MsgHeader = () => {
  return (
    <div className="messages-header flex items-center	justify-between">
      <div className="flex items-center gap-2">
        <img
          src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2024/03/emily-blunt-the-fall-guy.jpg"
          className="header-avatar"
        />
        <h5>Room Name</h5>
      </div>

      <div className="flex items-center gap-2">
        <div>Audio</div>
        <div>Video </div>
      </div>
    </div>
  );
};

export default MsgHeader;
