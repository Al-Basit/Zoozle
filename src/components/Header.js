import React from "react";
import "../assets/styles/Header.css";
import { Link } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";

function Header({ searchpage = false }) {
  return (
    <div className="header">
      {!searchpage ? (
        <div className="header__links">
          <Link to="/gmail">Gmail</Link> <Link to="/images">Images</Link>
        </div>
      ) : (
        <SettingsIcon />
      )}
      <AppsIcon />
      <Avatar />
    </div>
  );
}

export default Header;
