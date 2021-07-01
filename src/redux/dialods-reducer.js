const ADD_MESSAGE = 'ADD-MESSAGE';
const APDATE_MESSAGE_TEXT = 'APDATE-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {

  switch(action.type){
    case ADD_MESSAGE :
      let newMessage = {
        id: 1,
        text: state.newMessageText,
        author: 'Jake', 
        avatar:'https://s2.cdn.teleprogramma.pro/wp-content/uploads/2020/01/a76ebd11ecf1ab90a360b056f49b90a0.jpg', 
        alt:'avatar Jake'
      };
      state.messages.push(newMessage);
      state.newMessageText ='';
      break;
    case APDATE_MESSAGE_TEXT :
      state.newMessageText = action.newMessageText;
      break;
  }
  
  return state;
}

export default dialogsReducer;

export let addMessageCreator = () => ({type: ADD_MESSAGE});

export let apdateMessageTextCreator = (text) => ({type:APDATE_MESSAGE_TEXT, newMessageText: text}); 