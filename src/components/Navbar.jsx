import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PersonIcon from './assets/personIcon.jsx';
import ImageIcon from './assets/imageIcon.jsx';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileActive: true,
    };
  }
  render() {
    return (
      <nav className="menu-top__navbar navbar navbar-expand-sm">
        <div className="navbar__avatar avatar">
          <img className="avatar__img" src="./images/avatar.jpg" alt="avatar"/>
        </div>
        <ul className="navbar-nav">
          <Link to="/profile" onClick={() => this.setState({profileActive: true})}>
            <li className={classNames('nav-item', {
              'nav-item--active': this.state.profileActive
            })}>
              <PersonIcon/>
            </li>
          </Link>
          <Link to="/gallery" onClick={() => this.setState({profileActive: false})}>
            <li className={classNames('nav-item', {
              'nav-item--active': !this.state.profileActive
            })}>
              <ImageIcon/>
            </li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
