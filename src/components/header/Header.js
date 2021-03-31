import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Header.scss';
import logo from '../../img/Logo.png';
import {
  getMovies,
  setMovieType,
  setResponsePageNumber
} from '../../redux/actions/movies';
import { header_list } from './header_list';

const Header = (props) => {
  const {
    getMovies,
    setMovieType,
    page,
    totalPages,
    setResponsePageNumber
  } = props;
  let [navClass, setNavClass] = useState(false);
  let [menuClass, setMenuClass] = useState(false);
  const [type, setType] = useState('now_playing');

  useEffect(() => {
    getMovies(type, page);
    setResponsePageNumber(page, totalPages);
  }, [type]);

  const setMovieTypeUrl = (type) => {
    setType(type);
    setMovieType(type);
  };

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
              <li
                key={data.id}
                className={
                  data.type === type
                    ? 'header-nav-item active-item'
                    : 'header-nav-item'
                }
                onClick={() => setMovieTypeUrl(data.type)}
              >
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

Header.propTypes = {
  getMovies: PropTypes.func,
  setMovieType: PropTypes.func,
  setResponsePageNumber: PropTypes.func,
  page: PropTypes.number,
  totalPages: PropTypes.number
};

const mapStateToProps = (state) => ({
  page: state.movies.page,
  totalPages: state.movies.totalPages
});

export default connect(mapStateToProps, {
  getMovies,
  setMovieType,
  setResponsePageNumber
})(Header);
