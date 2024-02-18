import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="layout">
      <Header />
      <Outlet />
    </div>
  );
}

export default RootLayout;
