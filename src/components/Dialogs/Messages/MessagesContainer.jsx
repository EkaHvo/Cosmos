import React from 'react';
import Messages from './Messages';
import { addMessageCreator, apdateMessageTextCreator} from '../../../redux/dialogs-reducer';
import StoreContext from '../../../StoreContext';


const MessagesContainer = () => {

  return (
    <StoreContext.Consumer>
      { store => {
          let state = store.getState();

          let addMessage = () => {
            store.dispatch(addMessageCreator());
          }
        
          let apdateMessageText = (text) => {
            store.dispatch(apdateMessageTextCreator(text));
          }

          return  <Messages addMessage = {addMessage} apdateMessageText = {apdateMessageText} newMessageText={ state.dialogsState.newMessageText } messages={ state.dialogsState.messages }/>
        }
      }
    </StoreContext.Consumer>
  )
}

export default MessagesContainer;