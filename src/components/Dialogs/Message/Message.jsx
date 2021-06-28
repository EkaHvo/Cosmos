import React from 'react';
import c from './Message.module.css';

const Message = (props) => {
  let author = props.author;

  if(author === 'Jake'){
    return (
      <div className={c.message}><img src={ props.avatar } alt={ props.alt }></img>{props.text}</div>
      )
      
  } else {
    return (
      <div className={c.message +" "+ c.friendMessage}><img src={ props.avatar } alt={ props.alt }></img>{ props.text }</div>
    )
  }
}

export default Message;