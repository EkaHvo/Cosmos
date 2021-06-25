import React from 'react';
import { NavLink } from 'react-router-dom';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import c from './Dialogs.module.css';


const Dialogs = (props) => {

  let dialogs = props.dialogs;
  let messages = props.messages;

  let dialogElements = dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>);
  let messagesElements = messages.map(message => <Message text={message.text} />);

  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>
        { dialogElements }
      </div>
      <div className={c.messages}>
        { messagesElements }
      </div>
    </div>
  )
}

export default Dialogs;