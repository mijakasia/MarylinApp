import React from 'react';
import MapMarker from './icons/mapMarker.jsx';

const Profile = () => (
  <main className="profile">
    <header className="profile__profile-header profile-header">
      <h1 className="profile-header__main-tag">Marylin Monroe</h1>
      <p className="profile-header__location location"><span className="location__marker"><MapMarker/></span>Poznań, PL</p>
    </header>
  </main>
);

export default Profile
