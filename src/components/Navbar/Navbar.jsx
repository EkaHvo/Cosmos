import React from 'react';
import c from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={c.nav}>
        <ul className={c.list}>
          <li>
            <a className={c.item} href="#">Profile</a>
            </li>
          <li>
            <a className={c.item} href="#">Messages</a>
            </li>
          <li>
            <a className={c.item} href="#">Music</a>
            </li>
          <li>
            <a className={c.item} href="#">Friends</a>
          </li>
          <li>
            <a className={c.item} href="#">News</a>
          </li>
          <li>
            <a className={c.item} href="#">Settings</a>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar;