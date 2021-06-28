import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import c from './Dialogs.module.css';


const Dialogs = (props) => {

  let dialogElements = props.state.dialogs.map( dialog => <Dialog name={dialog.name} avatar={dialog.avatar} id={dialog.id}/>);

  let messagesElements = props.state.messages.map( message => <Message text={message.text} author={message.author} id={message.id} avatar={message.avatar}/>);

  let newMessage = React.createRef();

  let addMessage = () => {
    let text = newMessage.current.value;
    alert(text);
  }

  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>
        { dialogElements }
      </div>
      <div className={c.messages}>
        { messagesElements }
        <textarea ref={newMessage} className={c.newMessage}>my message</textarea>
        <button onClick={addMessage} className={c.btn}>Add</button>
      </div>
    </div>
  )
}

export default Dialogs;