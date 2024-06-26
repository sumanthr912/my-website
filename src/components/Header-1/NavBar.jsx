import React from 'react';
import { Link } from 'react-router-dom';

import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/WhyUs">WhyUs</Link>
        </li>
        <li className="nav-item">
          <Link to="/AllCourses">AllCourses</Link>
        </li>
        <li  className="nav-item">
          <Link to="/testinomials">Testinomials</Link>
        </li>
        <li className="nav-item">
          <Link to="/ContactUs">ContactUs</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;