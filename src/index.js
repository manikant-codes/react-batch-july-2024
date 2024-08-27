import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("my-element"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
