import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './Dialogs.module.css';

const DialogItem = (props) => {
  let path = '/dialogs/'+ props.id;

  return (
    <div className={c.dialog}>
      <NavLink activeClassName={c.active} to={path}>
        &#128386; <span>{ props.name }</span>
      </NavLink>
    </div>
  )
}

const Message = (props) => {
  return <div className={c.message}>{props.text}</div>
}

const Dialogs = (props) => {
  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>
        <DialogItem name='Lena' id='1'/>
        <DialogItem name='Ivan' id='2'/>
        <DialogItem name='Dima' id='3'/>
        <DialogItem name='Sveta' id='4'/>
      </div>
      <div className={c.messages}>
        <Message text='Hi'/>
        <Message text='How are you?'/>
        <Message text='Where are you come from?'/>
      </div>
    </div>
  )
}

export default Dialogs;