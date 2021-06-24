import React from 'react';
import Posts from './Posts/Posts';
import c from './Profile.module.css';

const Profile = () => {
  return (
    <div className={c.content}>
      <div className={c.personal}>
        <img src='images/avatar.jpg'></img>
        <div className={c.descr}>
          <h2>
            Jake Sully
          </h2>
          <div className={c.text}>
            <div>Date of birth: <span>24 August 2126</span></div>
            <div>Place: <span>Pandora</span></div>
          </div>
        </div>
      </div>
      <Posts />
    </div>
  )
}

export default Profile;