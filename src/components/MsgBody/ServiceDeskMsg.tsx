import React from "react";
import MsgFilePreview from "../Messages/MsgFilePreview";
import moment from "moment";

const ServiceDeskMsg = ({
  serviceDeskProfilePic,
  serviceDeskName,
  serviceDeskSingleMsg,
  serviceDeskTime,
  multiMsg,
  isBluck,
  isSelf,
  isSameUserMsg,
  fileData,
  isFile,
  isMsgRead,
  documentViewModalHandle,
  isMeetingRequest,
  meetingId,
}) => {
  let isDocumentWithMsg = false;
  if (serviceDeskSingleMsg && isFile == true) {
    isDocumentWithMsg = true;
  }

  return (
    <div
      className={`${isSelf === true ? "right-msg-box" : ""} ${
        isSameUserMsg ? " mt-2" : "mt-4"
      } left-msg-box d-flex`}
    >
      <div
        className="service-desk-profile small-desk-profile d-flex align-center justify-center radius-100"
        style={{ visibility: !isSameUserMsg ? "visible" : "hidden" }}
      >
        {/* <Avatar
          className="im-messages-body-user-avatar flex-center cover-image"
          // src={isSelf ? AvatarMale01 : serviceDeskProfilePic}
        >
          {serviceDeskName && serviceDeskName.charAt(0)}
        </Avatar> */}
      </div>

      <div
        className={`${isDocumentWithMsg && "aim-messages-document-with-msg"}`}
      >
        <div className="user-text-msg-wrap">
          {!isSameUserMsg && <h6 className="mb-2 fw-400">{serviceDeskName}</h6>}
          <div>
            <>
              {isFile && fileData ? (
                <>
                  <div
                    className="cursor-pointer"
                    onClick={() =>
                      documentViewModalHandle({
                        ...fileData,
                        url: fileData?.url,
                      })
                    }
                  >
                    <div
                      className={`d-flex align-center client-board-msg-doc  ${
                        isSameUserMsg ? "same-user-client-board-msg-doc" : ""
                      }`}
                    >
                      <div className="d-flex align-center">
                        <div className="doc-file-box " aria-hidden={true}>
                          <MsgFilePreview url={fileData?.fileType} />
                        </div>

                        <div className="doc-content">
                          <span className="mb-0 pl-3">
                            {fileData?.fileName}
                          </span>
                          {/* <span>File Size: 436kb</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}

              {!isDocumentWithMsg && (
                <div className="d-flex align-end justify-end aim-messaes-service-desk-msg-timestamp">
                  <small className="fw-400 aim-msg-time">
                    {serviceDeskTime
                      ? moment(serviceDeskTime).format("HH:mm")
                      : ""}
                  </small>
                  {isSelf && (
                    <span
                      className={`ml-1 ${
                        isMsgRead && "aim-message-read-by-user"
                      }`}
                    >
                      {/* {SVGIcons.doubleTickIco} */}
                    </span>
                  )}
                </div>
              )}
            </>

            {/* )} */}
          </div>
        </div>

        {isDocumentWithMsg && (
          <div className="user-text-msg-wrap d-flex align-end">
            <h6 className="mb-2 fw-400">{serviceDeskSingleMsg}</h6>
            <div>
              <>
                <p
                  className="mb-0 fw-400 user-msg-box-msg border-rounded-xl d-flex flex-column align-center"
                  style={{
                    padding: isSelf
                      ? "14px 58px 18px 18px"
                      : "14px 38px 18px 18px",
                  }}
                >
                  <div className="d-flex align-end justify-end aim-messaes-service-desk-msg-timestamp">
                    <small className="fw-400 aim-msg-time">
                      {serviceDeskTime
                        ? moment(serviceDeskTime).format("HH:mm")
                        : ""}
                    </small>
                    {isSelf && (
                      <span
                        className={`ml-1 ${
                          isMsgRead && "aim-message-read-by-user"
                        }`}
                      >
                        {/* {SVGIcons.doubleTickIco} */}
                      </span>
                    )}
                  </div>
                </p>
              </>

              {/* )} */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDeskMsg;
