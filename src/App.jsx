import React from 'react';

import './App.scss';
import Navbar from './components/Navbar.jsx';
import Jumbotron from './components/Jumbotron.jsx';

  const App = ({ props }) => [
    <Jumbotron key={0}/>,
    <Navbar key={1}/>,
  ];

export default App
