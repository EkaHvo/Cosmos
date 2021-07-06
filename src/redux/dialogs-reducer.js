const ADD_MESSAGE = 'ADD-MESSAGE';
const APDATE_MESSAGE_TEXT = 'APDATE-MESSAGE-TEXT';

let initialState = {
  messages: [],
  newMessageText:'',
  dialogs: [
    {id: 1, name: 'Lena', avatar:'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/600x380', alt:'avatar Lena'},
    {id: 2, name: 'Ivan', avatar:'https://www.vokrug.tv/pic/person/d/2/f/6/d2f68a00833e2bb574becedff71d406a.jpeg', alt:'avatar Ivan'},
    {id: 3, name: 'Dima', avatar:'https://i.pinimg.com/originals/54/30/e6/5430e66ea39afd12ef2ea649faa2bb59.jpg', alt:'avatar Dima'},
    {id: 4, name: 'Sveta', avatar:'http://pm1.narvii.com/6433/d81557a95b90361bbf191fb281113336f34c7e7e_00.jpg', alt:'avatar Sveta'}
  
  ]
}

const dialogsReducer = (state = initialState, action) => {

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