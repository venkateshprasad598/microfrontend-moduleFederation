import React from "react";

// import {
//     WMIconFileTypeCSV,
//     WMIconFileTypeDOC,
//     WMIconFileTypeJPEG,
//     WMIconFileTypeJPG,
//     WMIconFileTypeMP4,
//     WMIconFileTypePDF,
//     WMIconFileTypeXLS,
//     WMIconFileTypeZIP,
//   } from "../../assets/exportedAssets";

const MsgFilePreview = ({ url }: any) => {
  const dummyIcon = require("../../assets/icons/wm-icon-file-type-doc.png");
  switch (url) {
    case "jpg":
      return <img src={dummyIcon} alt="jpg" preview={false} />;
    case "jpeg":
      return <img src={dummyIcon} alt="jpeg" preview={false} />;
    case "pdf":
      return <img src={dummyIcon} alt="pdf" preview={false} />;
    case "xlsx":
      return <img src={dummyIcon} alt="xlsx" preview={false} />;
    case "csv":
      return <img src={dummyIcon} alt="csv" preview={false} />;
    case "docx":
      return <img src={dummyIcon} alt="docx" preview={false} />;
    case "zip":
      return <img src={dummyIcon} alt="zip" preview={false} />;
    case "mp4":
      return <img src={dummyIcon} alt="mp4" preview={false} />;
    case "mov":
      return <img src={""} alt="mov" />;
    default:
      return <div>No preview</div>;
  }
};

export default MsgFilePreview;
