import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <header className="min-w-[10vw] bg-white h-auto md:h-screen sticky top-0">
        <Sidebar />
      </header>
      <main className="flex-1 w-full bg-gray-100">
        <Outlet />
      </main>
      <Toaster position="top-center" />
    </div>
  );
}

export default Layout;
