import React from 'react';
import StoreContext from '../../StoreContext';
import Navbar from './Navbar';

const NavbarContainer = () => {
  return (
    <StoreContext.Consumer>
      { store => {
          return <Navbar store={store}/>
        }
      }
    </StoreContext.Consumer>
  )
}

export default NavbarContainer;