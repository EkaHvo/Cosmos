import React from 'react';

const Profile = () => {
  return (
    <div className='content'>
      <div className='pers-info'>
        <img className='pers-info__img' src='images/avatar.jpg'></img>
        <div className='pers-info__descr'>
          <h2 className='pers-info__title'>
            Jake Sully
          </h2>
          <div className='pers-info__text'>
            <div>Date of birth: <span>24 August 2126</span></div>
            <div>Place: <span>Pandora</span></div>
          </div>
        </div>
      </div>
      <div className='posts'>
        <h2 className='posts__title'>My posts</h2>
        <textarea className='posts__textarea'placeholder='my news' name='new post'></textarea>
        <button className='btn'>Send</button>
        <div className='posts__item'>
          <img className='posts__avatar' src='images/avatar.jpg'></img>
          <div className='posts__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus
          molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias  officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus
          molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias  officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus
          molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias  officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus
          molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias  officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!
          </div>
        </div>
        <div className='posts__item'>
          <img className='posts__avatar' src='images/avatar.jpg'></img>
          <div className='posts__text'>Hello, world!
          </div>
        </div> 
        <div className='posts__item'>
          <img className='posts__avatar' src='images/avatar.jpg'></img>
          <div className='posts__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus
          molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias  officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          </div>
        </div>        
      </div>
    </div>
  )
}

export default Profile;