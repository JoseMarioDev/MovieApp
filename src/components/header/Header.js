import React from 'react';
import './Header.scss';
import logo from '../../img/Logo.png';
const Header = () => {
  return (
    <>
      <div className="header-nav-wrapper">
        <div className="header-bar"></div>
        <div className="header-navbar">
          <div className="header-image">
            <img src={logo} alt="logo" />
          </div>
          <div className="header-menu-toggle">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className="header-nav">
            <li className="header-nav-item"></li>
            <li className="header-nav-item"></li>
          </ul>
          <input
            type="text"
            placeholder="search for movie"
            className="search-input"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
