const ADD_POST = 'ADD-POST';
const APDATE_POST_TEXT = 'APDATE-POST-TEXT';

const profileReducer = (state, action) => {

  switch (action.type) {
    case ADD_POST :
      let newPost = {
        id: 1,
        text: state.newPostText,
        likesCount: 0
      };
      state.posts.push(newPost);
      state.newPostText ='';
      break;
    case APDATE_POST_TEXT :
      state.newPostText = action.newText;
      break;
  }
  return state;
}

export default profileReducer;

export let addPostCreator = () => ({type: ADD_POST});

export let apdatePostTextCreator = (text) => ({type: APDATE_POST_TEXT, newText: text});