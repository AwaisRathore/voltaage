import Sidenav from "./components/SideNav";
import Dashboard from "./components/Dashboard";
import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function App() {
  const [isRoot, setIsRoot] = useState(true);

  let location = useLocation();
  useEffect(() => {
    setIsRoot(location.pathname === "/");
  }, [location.pathname]);
  return (
    <div className=" container mx-auto flex   min-h-screen flex-col bg-neutral-800 p-0 font-customFont md:pl-60">
      <Sidenav />
      {isRoot ? <Dashboard /> : <Outlet />}
    </div>
  );
}
