import React from "react";
import "./MsgBody.css";
import MsgBodyMsgs from "./MsgBodyMsgs";

const MsgBody = () => {
  return (
    <div className="messages-body flex flex-col gap-2">
      <MsgBodyMsgs />
      
    </div>
  );
};

export default MsgBody;
