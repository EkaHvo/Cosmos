import React from 'react';
import Post from './Post/Post';
import c from './Posts.module.css';


const Posts = (props) => {
  
  let postElements = props.posts.map( (post, index) => <Post index = {index} message={ post.text } likesCount= { post.likesCount } dislikesCount= { post.dislikesCount } removePost = {props.removePost}/>);

  let newPostElem = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onApdatePostText = () => {
    let text = newPostElem.current.value;
    props.apdatePostText(text);
  }

  return (
    <div className={c.postsWrapper}>
      <div className={c.postsArea}>
        <h2 className={c.title}>My posts</h2>
        <textarea ref={ newPostElem } onChange={ onApdatePostText } value={ props.newPostText }/>
        <button onClick={ onAddPost } className={c.btn}>Add</button>
      </div>
      <div className={c.posts}>
        { postElements }
      </div>
    </div>
    
  )
}

export default Posts;