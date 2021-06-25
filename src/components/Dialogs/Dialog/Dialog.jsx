import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './Dialog.module.css';

const Dialog = (props) => {
  let path = '/dialogs/'+ props.id;

  return (
    <div className={c.dialog}>
      <NavLink activeClassName={c.active} to={path}>
        &#128386; <span>{ props.name }</span>
      </NavLink>
    </div>
  )
}


export default Dialog;