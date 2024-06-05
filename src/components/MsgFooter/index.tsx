import React from "react";
import "./MsgFooter.css";

const attachmentIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="m12.2 11.8-1.41 1.41c-.78.78-.78 2.05 0 2.83.78.78 2.05.78 2.83 0l2.22-2.22a4.008 4.008 0 0 0 0-5.66 4.008 4.008 0 0 0-5.66 0l-2.42 2.42a3.428 3.428 0 0 0 0 4.85"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);
const MsgFooter = () => {
  return (
    <div className="messages-footer flex items-center gap-2">
      <div

      // onClick={() => openAttachmentModal()}
      >
        {attachmentIcon}
      </div>
      <input
        className="messages-footer-text-input"
        disabled={false}
        placeholder={"Type your message here..."}
        // value={inputVal}
        // onKeyDown={(ev) => {
        //   if (ev.key === "Enter") {
        //     ev.preventDefault();
        //     handleSendMessage();
        //   }
        // }}
        // onChange={(e: any) => {
        //   const { value } = e.target;
        //   setInputVal(value);
        // }}
      />
      <div className="im-messages-footer-action-wrapper">
        <button className="messages-buttton">Send</button>
      </div>
    </div>
  );
};

export default MsgFooter;