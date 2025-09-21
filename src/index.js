// src/main.jsx or src/index.jsx (your entry file)
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n"; // <-- important: initialize i18n exactly once at the root

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
