import React, { useState } from 'react';
import './Header.scss';
import logo from '../../img/Logo.png';
import { header_list } from './header_list';

const Header = () => {
  let [navClass, setNavClass] = useState(false);
  let [menuClass, setMenuClass] = useState(false);

  const toggleMenu = () => {
    menuClass = !menuClass;
    navClass = !navClass;
    setNavClass(navClass);
    setMenuClass(menuClass);
    if (navClass) {
      document.body.classList.add('header-nav-open');
    } else {
      document.body.classList.remove('header-nav-open');
    }
  };

  return (
    <>
      <div className="header-nav-wrapper">
        <div className="header-bar"></div>
        <div className="header-navbar">
          <div className="header-image">
            <img src={logo} alt="logo" />
          </div>
          <div
            className={`${
              menuClass ? 'header-menu-toggle is-active' : 'header-menu-toggle'
            }`}
            id="header-mobile-menu"
            onClick={() => toggleMenu()}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul
            className={`${
              navClass ? 'header-nav header-mobile-nav' : 'header-nav'
            }`}
          >
            {header_list.map((data) => (
              <li key={data.id} className="header-nav-item">
                <span className="header-list-name">
                  <i className={data.iconClass}></i>
                </span>
                &nbsp;
                <span className="header-list-name">{data.name}</span>
              </li>
            ))}
            <input
              type="text"
              placeholder="search for movie"
              className="search-input"
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
