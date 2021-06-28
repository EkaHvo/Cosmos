import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './Sidebar.module.css';

const Sidebar = (props) => {

  let sidebarElements = props.state.map(navElement =>
    <li className={c.navItem}>
      <NavLink to={navElement.src} activeClassName={c.active}>{navElement.navItem}</NavLink>
    </li>
  )

  return (
    <div>
      <nav className={c.nav}>
        <ul>
          { sidebarElements }
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar;