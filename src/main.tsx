import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

//https://ja.react.dev/reference/react/useState#updating-state-based-on-the-previous-state

ReactDOM.createRoot(document.getElementById("root")!).render(
  // StrictMode 開発環境のみ二回呼び出される
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
