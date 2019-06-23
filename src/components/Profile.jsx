import React from 'react';
import MapMarker from './icons/mapMarker.jsx';
import classNames from 'classnames';

const Profile = () => (
  <main className="profile">
    <header className="profile__profile-header profile-header">
      <h1 className="profile-header__main-tag">Marylin Monroe</h1>
      <p className="profile-header__location location">
        <span className="location__marker">
          <MapMarker/>
        </span>
        Poznań, PL
      </p>
    </header>
    <ProfileSection
      text="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
    />
    <ProfileSection
      text="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
      quote
    />
    <ProfileSection
      text="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
    />
  </main>
);

const ProfileSection = (props) => (
  <section className="profile__profile-section profile-section">
    <p className={classNames('profile-section', {
      'profile-section--quote': props.quote
    })}>
      {props.text}
    </p>
  </section>
);

export default Profile
