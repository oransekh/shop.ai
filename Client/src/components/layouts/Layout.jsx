import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      {/*toast*/}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        containerStyle={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
        }}
      />
    </>
  );
};

export default Layout;
