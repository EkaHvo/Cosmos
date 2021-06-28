import React from 'react';
import c from './Post.module.css';

const Post = (props) => {
  return (
      <div className={c.item}>
        <div className={c.post}>        
          <img src='images/avatar.jpg' alt='my avatar'></img>
          <div className={c.text}>{ props.message }</div>
        </div>
        <div className={c.rating}>        
          <div className={c.like}>
            <span>{ props.likesCount }</span>
            &#x1F44D;
          </div>
          <div className={c.dislike}>
            <span>{ props.dislikesCount }</span>
            &#128078;
          </div>
        </div>

      </div>
  )
}

export default Post;