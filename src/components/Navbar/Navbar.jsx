import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Friends from './Friends/Friends';
import c from './Navbar.module.css';

const Navbar = (props) => {

 let state = props.store.getState();

  return (
    <div className={c.navbar}>
      <Sidebar state={ state.navbarState.sidebar }/>
      <Friends state={ state.navbarState.friends }/>
    </div>
      
  )
}

export default Navbar;