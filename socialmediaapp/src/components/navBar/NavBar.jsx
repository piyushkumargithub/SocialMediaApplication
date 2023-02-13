import "./navBar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";

const NavBar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  return (
    <div className="navBar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>SocialApp</span>
        </Link>
        <HomeOutlinedIcon />
        {!darkMode ? (
          <DarkModeOutlinedIcon onClick={toggle} />
        ) : (
          <WbSunnyOutlinedIcon onClick={toggle}/>
        )}
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type={"text"} placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg" />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
