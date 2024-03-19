import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../styles/hotels-styles/header.css"
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import { Login } from "@mui/icons-material";

function Header() {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const tokens = localStorage.getItem("token");

  const handleClick = () => setClick(!click);

  const logoutHandler = ()=>{
    localStorage.removeItem("token");
    navigate("/login")
  }
  return (
    <>
      <nav id="nav-bar" className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span style={{ fontWeight: "700", color: "#ffa500" }}>BookMyTrip</span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"} >
            <li className="nav-item marg">
              <NavLink
                exact
                to="/home"
                activeClassName="active"
                className="nav-links" style={{ color: "white", textDecoration: "none" }}
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item  marg">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links" style={{ color: "white", textDecoration: "none" }}
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item  marg">
              <NavLink
                exact
                to="/hotels"
                activeClassName="active"
                className="nav-links" style={{ color: "white", textDecoration: "none" }}
                onClick={handleClick}
              >
                Hotels
              </NavLink>
            </li>
            <li className="nav-item marg">
              <NavLink
                exact
                to="/flights"
                activeClassName="active"
                className="nav-links" style={{ color: "white", textDecoration: "none" }}
                onClick={handleClick}
              >
                Flights
              </NavLink>
            </li>
            <li className="nav-item marg">
              <NavLink
                exact
                to="/buses"
                activeClassName="active"
                className="nav-links" style={{ color: "white", textDecoration: "none" }}
                onClick={handleClick}
              >
                Buses
              </NavLink>
            </li>
            {
              tokens ? (
                <li className="nav-item">
                  <button onClick={logoutHandler} className="btr">
                    Logout
                  </button>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <button className="btg">
                      <Link to="/login" style={{ color: "white", textDecoration: "none" }}> Log In</Link>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="btr">
                      <Link to="/signup" style={{ color: "white", textDecoration: "none" }}> Register </Link>
                    </button>
                  </li>
                </>
              )
            }
          </ul>
          <div className="nav-icon" onClick={handleClick}>

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
