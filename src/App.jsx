import React from 'react';
import Profile from './components/Profile.jsx';
import { Router } from "@reach/router";
import Gallery from './components/Gallery.jsx';

import MenuTop from './MenuTop.jsx';

import './App.scss';

  const AppContainer = ({ children }) => (
    <div>
      <MenuTop/>
      <Router>
        <Profile path="/" />
        <Gallery path="/gallery" />
      </Router>
    </div>
  );

export default AppContainer
