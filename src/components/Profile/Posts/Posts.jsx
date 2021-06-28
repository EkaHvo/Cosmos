import React from 'react';
import Post from './Post/Post';
import c from './Posts.module.css';

const Posts = (props) => {
  
  let postElements = props.posts.map( post => <Post message={ post.text } likesCount= {post.likesCount }/>);

  let newPostElem = React.createRef();

  let addPosts = () => {
    let text = newPostElem.current.value;
    props.addPost(text);
    newPostElem.current.value = '';
  }

  return (
    <div className={c.postsWrapper}>
      <div className={c.postsArea}>
        <h2 className={c.title}>My posts</h2>
        <textarea ref={newPostElem} placeholder='my news' name='new post'></textarea>
        <button onClick={ addPosts } className={c.btn}>Send</button>
      </div>
      <div className={c.posts}>
        { postElements }
      </div>
    </div>
    
  )
}

export default Posts;