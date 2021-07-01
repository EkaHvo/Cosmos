import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { addMessageCreator, apdateMessageTextCreator } from '../../redux/state';
import c from './Dialogs.module.css';


const Dialogs = (props) => {

  let dialogElements = props.dialogsState.dialogs.map( dialog => <Dialog name={dialog.name} avatar={dialog.avatar} id={dialog.id}/>);

  let messagesElements = props.dialogsState.messages.map( message => <Message text={message.text} author={message.author} id={message.id}  avatar={message.avatar}/>);

  let newMessage = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageCreator());
  }

  let apdateMessageText = () => {
    let text = newMessage.current.value;
    props.dispatch(apdateMessageTextCreator(text));
  }

  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>
        { dialogElements }
      </div>
      <div className={c.messages}>
        <div>{ messagesElements }</div>
        <textarea ref={ newMessage } className={c.newMessage} onChange={ apdateMessageText } value={ props.dialogsState.newMessageText } />
        <button onClick={ addMessage } className={c.btn}>Add</button>
      </div>
    </div>
  )
}

export default Dialogs;