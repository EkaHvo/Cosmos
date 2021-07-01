import React from 'react';
import Post from './Post/Post';
import { addPostCreator, apdatePostTextCreator } from '../../../redux/state';
import c from './Posts.module.css';


const Posts = (props) => {
  
  let postElements = props.profileState.posts.map( post => <Post message={ post.text } likesCount= { post.likesCount }/>);

  let newPostElem = React.createRef();

  let addPost = () => {
    props.dispatch(addPostCreator());
  }

  let apdatePostText = () => {
    let text = newPostElem.current.value;
    props.dispatch(apdatePostTextCreator(text));
  }

  return (
    <div className={c.postsWrapper}>
      <div className={c.postsArea}>
        <h2 className={c.title}>My posts</h2>
        <textarea ref={newPostElem} onChange={ apdatePostText } value={ props.profileState.newPostText }/>
        <button onClick={ addPost } className={c.btn}>Add</button>
      </div>
      <div className={c.posts}>
        { postElements }
      </div>
    </div>
    
  )
}

export default Posts;