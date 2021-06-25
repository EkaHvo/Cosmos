import React from 'react';
import Post from './Post/Post';
import c from './Posts.module.css';

const Posts = (props) => {
  
  let posts = props.posts;
  let postElements = posts.map( post => <Post message={post.text} likesCount={post.likesCount}/>);

  return (
    <div className={c.postsWrapper}>
      <div className={c.postsArea}>
        <h2 className={c.title}>My posts</h2>
        <textarea placeholder='my news' name='new post'></textarea>
        <button className={c.btn}>Send</button>
      </div>
      <div className={c.posts}>
        { postElements }
      </div>
    </div>
    
  )
}

export default Posts;