import React from 'react';
import c from './Profile.module.css';

const Profile = () => {
  return (
    <div className={c.content}>
      <div className={c.personal}>
        <img className={c.img} src='images/avatar.jpg'></img>
        <div className={c.descr}>
          <h2 className={c.title}>
            Jake Sully
          </h2>
          <div className={c.text}>
            <div>Date of birth: <span>24 August 2126</span></div>
            <div>Place: <span>Pandora</span></div>
          </div>
        </div>
      </div>
      <div className={c.posts}>
        <h2 className={c.title}>My posts</h2>
        <textarea className={c.textarea} placeholder='my news' name='new post'></textarea>
        <button className={c.btn}>Send</button>
        <div className={c.item}>
          <img className={c.avatar} src='images/avatar.jpg'></img>
          <div className={c.post}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus
          molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias  officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus
          molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias  officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus
          molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias  officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus
          molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias  officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!
          </div>
        </div>  
        <div className={c.item}>
          <img className={c.avatar} src='images/avatar.jpg'></img>
          <div className={c.post}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus
          molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias  officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus
          molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias  officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus
          molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias  officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus
          molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias  officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!
          </div>
        </div>  
        <div className={c.item}>
          <img className={c.avatar} src='images/avatar.jpg'></img>
          <div className={c.post}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus
          molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias  officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus
          molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias  officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus
          molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias  officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus
          molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias  officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!
          </div>
        </div>  
        <div className={c.item}>
          <img className={c.avatar} src='images/avatar.jpg'></img>
          <div className={c.post}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus
          molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias  officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus
          molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias  officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus
          molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias  officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus
          molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias  officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Profile;