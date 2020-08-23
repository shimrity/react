import produce from 'immer';
import {nextId} from '../../utils';

const initialState = { 
  messages: [
    { id: 0, from: 'ynon', text: 'Hello Everyone' },
  ],

};

export default produce((state, action) => {
  switch(action.type) {
   
    case 'RECEIVED_MESSAGE':     
      state.messages.push({id: nextId(state.messages),from:action.payload.from, text:action.payload.text});
      break;
      case 'DELETE_MESSAGE':     
      state.messages = state.messages.filter(item => item.id !== action.payload.id)
      break;    
  }
}, initialState);



