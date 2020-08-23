import { createStore, combineReducers, applyMiddleware } from 'redux';
import produce from 'immer';

import rooms from './reducers/rooms';
import messages from './reducers/messages';
import account from './reducers/accont';
import oldstate from './reducers/oldstate';
import {setUsername} from './actions';

const reduxMiddleware = store => next => action => {
  // middleware code goes here
  if(action.type  === 'ACTION'){
  if(action.meta && action.meta.delay)
  {
    
    setTimeout(function(){
     
      store.dispatch({ type: 'SET_USERNAME', payload: 'SYSTEM' })
     
      return next(action) }, action.meta.delay);
  }  
}
return next(action) ;
};
const reduxMiddlewareSaveOldState = store => next => action => {
  // middleware code goes here
  
  if(action.type  !== 'UNDO' && action.type !=='SAVE_STATE')
    {
   
  store.dispatch({ type: 'SAVE_STATE', payload: action.payload })
  return next(action);
  }
 //else
 
  //store.dispatch({ type: 'UNDO', payload: 'SYSTEM' })



};
/*function reducer(state, action)  {
  return {
    rooms: roomReduser(state.rooms,action),
    account: accountReduser(state.account,action) ,
    messages: messagesReduser(state.messages,action),
  }
}*/

const reducer = combineReducers({rooms,account,messages,oldstate})

const store = createStore(reducer,applyMiddleware(reduxMiddleware,reduxMiddlewareSaveOldState));
window.store = store;
export default store;

