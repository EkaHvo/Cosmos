import React from 'react';
import Message from './Message/Message';
import c from './Messages.module.css';


const Messages = (props) => {

  let messagesElements = props.messages.map( message => <Message text={message.text} author={message.author} id={message.id}  avatar={message.avatar}/>);

  let newMessage = React.createRef();

  let addMessage = () => {
    props.addMessage();
  }

  let apdateMessageText = () => {
    let text = newMessage.current.value;
    props.apdateMessageText(text);
  }

  return (
      <div className={c.messages}>
        <div>{ messagesElements }</div>
        <textarea ref={ newMessage } className={c.newMessage} onChange={ apdateMessageText } value={ props.newMessageText } />
        <button onClick={ addMessage } className={c.btn}>Add</button>
      </div>
  )
}

export default Messages;