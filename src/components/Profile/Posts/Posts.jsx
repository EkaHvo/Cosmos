import React from 'react';
import Post from './Post/Post';
import c from './Posts.module.css';

const Posts = () => {
  return (
    <div className={c.postsWrapper}>
      <div className={c.postsArea}>
        <h2 className={c.title}>My posts</h2>
        <textarea placeholder='my news' name='new post'></textarea>
        <button className={c.btn}>Send</button>
      </div>
      <div className={c.posts}>
      <Post message='Hello, friend' likeCount='3'/>
      <Post message='Hi, bro!'likeCount='8'/>
      </div>
    </div>
    
  )
}

export default Posts;