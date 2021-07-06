import React from 'react';
import Posts from './Posts';
import { addPostCreator, apdatePostTextCreator, removePostDeliter } from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';

const PostsContainer = () => {

  return (
    <StoreContext.Consumer> 
      { store => {

      let state = store.getState();

      let addPost = () => {
        store.dispatch(addPostCreator());
      }
    
      let apdatePostText = (text) => {
        store.dispatch(apdatePostTextCreator(text));
      }
    
      let removePost = (index) => {
        store.dispatch(removePostDeliter(index));
      }

      return <Posts apdatePostText = { apdatePostText } addPost = { addPost } removePost = {removePost} posts = { state.profileState.posts } newPostText = { state.profileState.newPostText }/>
      }
    }
    </StoreContext.Consumer>
  )
}

export default PostsContainer;