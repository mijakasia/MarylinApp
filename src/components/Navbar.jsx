import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    return (
      <nav className="menu-top__navbar navbar navbar-expand-sm">
        <div className="navbar__avatar avatar">
          <img className="avatar__img" src="./images/avatar.jpg" alt="avatar"/>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Profile</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Gallery</a>
          </li>
        </ul>
      </nav>
    );
  }

}

export default Navbar;
