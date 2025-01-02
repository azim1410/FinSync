import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import finsync_logo from "../../../../Images/finsync_logo.png";
import profile_pic from "./profile_pic.jpg";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoCaretUpSharp } from "react-icons/io5";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null); // Type the ref correctly

  const handleProfileClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img className="navbar-icon" src={finsync_logo} alt="" />
        <h1 className="navbar-logo-name">FinSync</h1>
      </div>
      <div
        className="navbar-profile"
        onClick={handleProfileClick}
        ref={dropdownRef}
      >
        <img
          className="navbar-profile-pic"
          src={profile_pic}
          alt="profile-pic"
        />
        <p className="navbar-profile-name">Samad Mohammed</p>
        <IoMdArrowDropdown />
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <IoCaretUpSharp className="dropdown-caret" />
            <ul>
              <li>
                <a href="/your-account">Your Account</a>
              </li>
              <li>
                <a href="/create-group">Create a Group</a>
              </li>
              <li>
                <a href="/fairness-calculator">Fairness Calculator</a>
              </li>
              <li>
                <a href="/contact-support">Contact Support</a>
              </li>
              <li>
                <a href="/logout">Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
