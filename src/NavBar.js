import React, { useState } from "react";
import {Link , NavLink } from "react-router-dom";
import "./NavBar.css";
import Logo from './resources/logoSmaller.svg'
import { MDBIcon } from 'mdb-react-ui-kit';
import 'font-awesome/css/font-awesome.min.css';
function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={Logo}></img>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                ראשי
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/AboutTheProject"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                אודות הפרויקט
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/AboutUs"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                עלינו
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/ContactUs"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                צור קשר
              </NavLink>
            </li>
            <li className="nav-item">
            <div>
            
            <a  href="https://github.com/SagKun/Mood" className="p-2 fa-lg">
           
            <MDBIcon   fab icon="github" className="white-text"  size="lg"/>  
            </a>
            </div>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;