import React from 'react';
import DialogList from './Dialoglist';
import StoreContext from '../../../StoreContext';


const DialogContainer = () => {
  
  return (
    <StoreContext.Consumer>
      { store => {
        return <DialogList store = {store}/>
        }
      }  
    </StoreContext.Consumer>
    )
  }

export default DialogContainer;