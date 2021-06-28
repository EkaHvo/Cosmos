import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Friends from './Friends/Friends';
import c from './Navbar.module.css';

const Navbar = (props) => {
  return (
    <div className={c.navbar}>
      <Sidebar state={ props.state.sidebar }/>
      <Friends state={ props.state.friends }/>
    </div>
      
  )
}

export default Navbar;