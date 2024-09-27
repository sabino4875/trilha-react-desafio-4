import React from "react";
import { Login } from "./pages/Login";
import "./globals.css";

export default function Home() {
  return (
    <>
      <React.StrictMode>
        <Login />
      </React.StrictMode>
    </>
  );
}
