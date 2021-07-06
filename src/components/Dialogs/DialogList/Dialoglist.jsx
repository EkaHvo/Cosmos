import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import c from './Dialoglist.module.css';

const DialogList = (props) => {

  let state = props.store.getState();

  let dialogElements = state.dialogsState.dialogs.map( dialog => <DialogItem name={dialog.name} avatar={dialog.avatar} id={dialog.id}/>);
  return (
    <div className={c.dialogsItems}>
      { dialogElements }
    </div>
    )
  }

export default DialogList;