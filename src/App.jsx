import React from 'react';
import App from './App.jsx';
import Profile from './components/Profile.jsx';
import { Router, Link, Redirect } from "@reach/router";

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

  const Gallery = () => (
    <div>
      <h2>Dashboard</h2>
    </div>
  );

export default AppContainer
