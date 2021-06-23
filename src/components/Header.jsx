import React from 'react';

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <img src='images/logo.png'></img>
        <h1>Cosmos network</h1>
      </div>
      <div className='pers-header'>
          <div>
            Jake Sully
          </div>
          <img src='images/avatar.jpg'></img>
      </div>
    </header>
  )
}

export default Header;