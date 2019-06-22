import React, { Component } from 'react';

import Navbar from './components/Navbar.jsx';
import Jumbotron from './components/Jumbotron.jsx';

class MenuTop extends Component {

  render() {
    return [
      <Jumbotron key={0}/>,
      <Navbar key={1}/>,
    ];
  }

}

export default MenuTop;
