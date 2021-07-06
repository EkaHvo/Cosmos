import React from 'react';
import PostsContainer from './Posts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <div>
      <ProfileInfo name='Jake Sully' birthday='24 August 2126' place='Pandora'/>
      <PostsContainer/>
    </div>
  )
}

export default Profile;