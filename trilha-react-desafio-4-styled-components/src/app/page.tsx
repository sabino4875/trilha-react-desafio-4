import React from "react";
//import ReactDOM from "react-dom/client";
import App from "./pages/Login";
import GlobalStyles from "./global";

export default function Page() {
  return (
    <>
      <React.StrictMode>
        <GlobalStyles />
        <App />
      </React.StrictMode>
    </>
  );
 }
