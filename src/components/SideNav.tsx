import profile from "@/assets/profile.svg";
import hamburger from "@/assets/hamburger.svg";
import cross from "@/assets/cross.svg";
import logo from "@/assets/logomain.svg";
import gear from "@/assets/gear.svg";
import table from "@/assets/table.svg";
import tablew from "@/assets/tablew.svg";
import building from "@/assets/building.svg";
import buildingw from "@/assets/buildingw.svg";
import person from "@/assets/person.svg";
import personw from "@/assets/personw.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Sidenav() {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsOpen(true);
  };
  const handleMenuClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <nav
        className={`${
          isOpen ? "left-0" : "-left-60"
        } 2xl:right- duration-300 fixed top-0 z-10 flex h-screen w-60 flex-col items-center justify-between bg-neutral-800 px-6 py-8 shadow-md transition-all md:left-0`}
      >
        <div className="flex w-full flex-col items-center gap-4">
          {!isOpen ? (
            <img
              className=" hidden w-3/4 transition-all duration-100 md:block "
              src={logo}
              alt="logo"
            />
          ) : (
            <img
              onClick={handleMenuClose}
              className=" h-6 w-fit "
              src={cross}
              alt="logo"
            />
          )}

          <div className="h-[0.5px] w-full bg-neutral-600"></div>

          <div className="text-sm font-bold text-white">SDIRVE Assistant</div>
        </div>

        <ul className=" flex flex-col gap-8">
          <li>
            <NavLink to="/">
              {({ isActive }) => (
                <div
                  className={`${
                    isActive ? "bg-white " : "bg-transparent "
                  } flex gap-4 rounded-xl px-4 py-3`}
                >
                  <img src={isActive ? table : tablew} alt="" />
                  <span
                    className={
                      isActive
                        ? "text-sm font-bold text-neutral-800"
                        : "text-sm  font-bold text-white"
                    }
                  >
                    Tableau the Board
                  </span>
                </div>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/entreprises">
              {({ isActive }) => (
                <div
                  className={`${
                    isActive ? "bg-white " : "bg-transparent "
                  } flex gap-4 rounded-xl px-4 py-3`}
                >
                  <img src={isActive ? building : buildingw} alt="" />
                  <span
                    className={
                      isActive
                        ? "text-sm font-bold text-neutral-800"
                        : "text-sm  font-bold text-white"
                    }
                  >
                    Entreprises
                  </span>
                </div>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/particuliers">
              {({ isActive }) => (
                <div
                  className={`${
                    isActive ? "bg-white " : "bg-transparent "
                  } flex gap-4 rounded-xl px-4 py-3`}
                >
                  <img src={isActive ? person : personw} alt="" />
                  <span
                    className={
                      isActive
                        ? "text-sm font-bold text-neutral-800"
                        : "text-sm  font-bold text-white"
                    }
                  >
                    Particuliers
                  </span>
                </div>
              )}
            </NavLink>
          </li>
        </ul>
        <div className="mb-4 flex w-full flex-col gap-2">
          <div className="mb-3 text-sm font-bold text-slate-300">Account</div>
          <div className="flex w-full gap-4 rounded-xl bg-transparent px-4 py-3">
            <img src={profile} alt="" />
            <span className={"text-sm  font-bold text-white"}>Profile</span>
          </div>
          <div className="flex w-full gap-4 rounded-xl bg-transparent px-4 py-3">
            <img src={gear} alt="" />
            <span className={"text-sm  font-bold text-white"}>Settings</span>
          </div>
        </div>
      </nav>
      {/* hidden navbar  */}
      <div className="visible flex items-center justify-between px-4 py-4 md:hidden">
        <img
          onClick={handleMenuOpen}
          className=" h-6 "
          src={hamburger}
          alt="logo"
        />

        <img className=" h-6 " src={logo} alt="logo" />
        <img
          className=" cursor-pointer "
          src={profile}
          alt="profile-icon"
        />
      </div>
    </>
  );
}

export default Sidenav;
