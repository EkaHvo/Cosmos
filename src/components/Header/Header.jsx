import React from 'react';
import c from './Header.module.css';

const Header = () => {
  return (
    <header className={c.header}>
      <div className={c.logo}>
        <img className={c.img} src='./../images/logo.png' alt='logo'></img>
        <h1 className={c.title}>Cosmos network</h1>
      </div>
      <div className={c.personal}>
          <div>
            Jake Sully
          </div>
          <img className={c.avatar} src='./../images/avatar.jpg' alt='my avatar'></img>
      </div>
    </header>
  )
}

export default Header;