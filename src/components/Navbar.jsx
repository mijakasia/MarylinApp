import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
  render() {
    return (
      <nav className="menu-top__navbar navbar navbar-expand-sm">
        <div className="navbar__avatar avatar">
          <img className="avatar__img" src="./images/avatar.jpg" alt="avatar"/>
        </div>
        <ul className="navbar-nav">
          <Link to="/profile">
            <li className="nav-item active">
              Profile
            </li>
          </Link>
          <Link to="/gallery">
            <li className="nav-item">
              Gallery
            </li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
