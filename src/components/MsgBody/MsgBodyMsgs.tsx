import React from "react";
import ServiceDeskMsg from "./ServiceDeskMsg";

const MsgBodyMsgs = () => {
  const messageItem = {
    messageType: "IM",
  };
  return (
    <div>
      {(() => {
        switch (messageItem?.messageType) {
          // case "MEETING":
          //   return (
          //     <ServiceDeskMsg
          //       isMeetingRequest={true}
          //       isSameUserMsg={isSameUserMsg}
          //       serviceDeskProfilePic={RebbecaIcon}
          //       serviceDeskName={getUserName(messageItem)}
          //       multiMsg={[messageItem?.message]}
          //       serviceDeskSingleMsg={messageItem?.message}
          //       serviceDeskTime={
          //         messageItem?.createdAt ? messageItem?.createdAt : ""
          //       }
          //       isBluck={true}
          //       isSelf={messageItem?.from?.userId == userPhonNumber}
          //       fileData={messageItem?.data ? messageItem?.data : {}}
          //       isFile={false}
          //       isMsgRead={
          //         messageItem?.ackBy?.length == 0
          //           ? false
          //           : isMessageRead(
          //               currentRoomHeader?.roomDetails?.extId,
          //               messageItem?.ackBy,
          //             )
          //       }
          //       documentViewModalHandle={documentViewModalHandle}
          //       meetingId={messageItem?.data?.meetingId}
          //     />
          //   );
          case "IM":
            return (
              <h1>Hello</h1>
                // <UserMsg/>
              //   <ServiceDeskMsg
              // isSameUserMsg={isSameUserMsg}
              // serviceDeskProfilePic={RebbecaIcon}
              // serviceDeskName={getUserName(messageItem)}
              // multiMsg={[messageItem?.message]}
              // serviceDeskSingleMsg={messageItem?.message}
              // serviceDeskTime={
              //   messageItem?.createdAt ? messageItem?.createdAt : ""
              // }
              // isBluck={true}
              // isSelf={messageItem?.from?.userId == userPhonNumber}
              // fileData={messageItem?.data ? messageItem?.data : {}}
              // isFile={false}
              // isMsgRead={
              //   messageItem?.ackBy?.length == 0
              //     ? false
              //     : isMessageRead(
              //         currentRoomHeader?.roomDetails?.extId,
              //         messageItem?.ackBy
              //       )
              // }
              // documentViewModalHandle={documentViewModalHandle}
              //   />
            );
          case "CALLLOG":
            return <div></div>;
          case "MEETLOG":
            return <div></div>;

          // case "BOTLOG":
          //   return (

          //     <MsgRPBotMsg
          //       msg={
          //         messageItem?.message
          //           ? messageItem?.message.includes("null") ||
          //             messageItem?.message.includes("undefined")
          //             ? ""
          //             : messageItem?.message
          //           : ""
          //       }
          //     />
          //   );
          // case "DOCUMENT":
          //   return (
          //     <>
          //       <ServiceDeskMsg
          //         isSameUserMsg={isSameUserMsg}
          //         serviceDeskProfilePic={RebbecaIcon}
          //         serviceDeskName={getUserName(messageItem)}
          //         multiMsg={[messageItem?.message]}
          //         serviceDeskSingleMsg={messageItem?.data?.description}
          //         serviceDeskTime={
          //           messageItem?.createdAt ? messageItem?.createdAt : ""
          //         }
          //         isBluck={true}
          //         isSelf={messageItem?.from?.userId == userPhonNumber}
          //         fileData={messageItem?.data ? messageItem?.data : {}}
          //         isFile={true}
          //         isMsgRead={
          //           messageItem?.ackBy?.length == 0
          //             ? false
          //             : isMessageRead(
          //                 currentRoomHeader?.roomDetails?.extId,
          //                 messageItem?.ackBy,
          //               )
          //         }
          //         documentViewModalHandle={documentViewModalHandle}
          //       />
          //     </>
          //   );
          default:
            break;
        }
      })()}
      <div className={`flex left-msg-box mt-4`}>
        <span>Hi</span>
      </div>
      <div className={`flex justify-end right-msg-box mt-4`}>
        <span>Hello</span>
      </div>

      <div className={`flex left-msg-box mt-4`}>
        <span>How are you</span>
      </div>
      <div className={`flex justify-end right-msg-box mt-4`}>
        <span>I am good</span>
      </div>

      <div className={`flex left-msg-box mt-4`}>
        <span>Where are you?</span>
      </div>
      <div className={`flex justify-end right-msg-box mt-4`}>
        <span>Bangalore</span>
      </div>

      <div className={`flex left-msg-box mt-4`}>
        <span>Nice</span>
      </div>
      <div className={`flex justify-end right-msg-box mt-4`}>
        <span>Yeah</span>
      </div>

      <div className={`flex left-msg-box mt-4`}>
        <span>How'z life</span>
      </div>
      <div className={`flex justify-end right-msg-box mt-4`}>
        <span>decent, your's?</span>
      </div>

      <div className={`flex left-msg-box mt-4`}>
        <span>Awesome</span>
      </div>
      <div className={`flex justify-end right-msg-box mt-4`}>
        <span>Great!</span>
      </div>

      <div className={`flex left-msg-box mt-4`}>
        <span>Okay, bye.</span>
      </div>
      <div className={`flex justify-end right-msg-box mt-4`}>
        <span>Good bye!</span>
      </div>
    </div>
  );
};

export default MsgBodyMsgs;
