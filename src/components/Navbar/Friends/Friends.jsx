import React from 'react';
import c from './Friends.module.css';

const Friends = (props) => {

  let freindElement = props.state.map(elem => 
      <li className={c.friend}>
        <a href={elem.page}>
          <img src={elem.avatar} alt={elem.alt}></img>
          <div>{elem.name}</div>
        </a>
      </li>
  )

  return (
    <div  className={c.friends}>
      <div>Friends</div>
      <ul className={c.friendsList}>
      { freindElement }
      </ul>
    </div>
  )
}

export default Friends;