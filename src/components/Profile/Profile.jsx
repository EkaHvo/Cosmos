import React from 'react';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import c from './Profile.module.css';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo name='Jake Sully' birthday='24 August 2126' place='Pandora'/>
      <Posts posts={props.posts}/>
    </div>
  )
}

export default Profile;