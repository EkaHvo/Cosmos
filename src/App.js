import React from 'react';
import './normalize.min.css';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import MySettings from './components/MySettings/MySettings'
import { Route } from 'react-router-dom';

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar state={ props.state.navbarState }/>
        <div className='app-wrapper-content'>
          <Route path='/profile' 
          render = { () => <Profile 
            profileState={ props.state.profileState } 
            dispatch={ props.dispatch } /> 
            } />
          <Route path='/dialogs' 
          render = { () => <Dialogs dialogsState={ props.state.dialogsState } dispatch={ props.dispatch }/> } />
          <Route path='/music' component={Music}/>
          <Route path='/news' component={News}/>
          <Route path='/settings' component={MySettings}/>
        </div>
      </div>
  );
}

export default App;
