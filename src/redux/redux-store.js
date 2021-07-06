import { combineReducers, createStore } from "redux";
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import navbarReducer from './navbar-reducer';


let reducers = combineReducers({
  profileState: profileReducer,
  dialogsState: dialogsReducer,
  navbarState: navbarReducer,
});

let store = createStore(reducers);

export default store;