import React from 'react';
import MessagesContainer from './Messages/MessagesContainer';
import DialogListContainer from './DialogList/DialogListContainer';
import c from './Dialogs.module.css';


const Dialogs = () => {
  return (
    <div className={c.dialogs}>
      <DialogListContainer/>
      <MessagesContainer/>
    </div>
  )
}

export default Dialogs;