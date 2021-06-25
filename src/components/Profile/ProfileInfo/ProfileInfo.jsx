import React from 'react';
import c from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div className={c.personal}>
    <img src='images/avatar.jpg'></img>
    <div className={c.descr}>
      <h2>
        {props.name}
      </h2>
      <div className={c.text}>
        <div>Date of birth: <span>{props.birthday}</span></div>
        <div>Place: <span>{props.place}</span></div>
      </div>
    </div>
  </div>
  )
}

export default ProfileInfo;