import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div className="flex">
      <header className="min-w-[10vw] bg-white h-screen sticky top-0">
        <Sidebar/>
      </header>
      <main className="flex-1 w-screen bg-gray-100">
        <Outlet />
      </main>
      <Toaster position="top-center"/>
    </div>
  )
}


export default Layout;
