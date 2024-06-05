import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MsgHeader from "./components/MsgHeader";
import MsgFooter from "./components/MsgFooter";
import MsgBody from "./components/MsgBody";

const App = () => (
  <div className="m-3 messages-body-content-wrap">
    <MsgHeader />
    <MsgBody />
    <MsgFooter />
  </div>
);

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

ReactDOM.render(<App />, rootElement);
