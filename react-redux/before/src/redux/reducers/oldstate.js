
import produce from 'immer';

const initialState = {
 
  oldstate: null,

};

export default produce((state, action) => {
    console.log("dddddd ==> "+action.type+" ==> "+ action.payload);   
    //משומה מקבל את האקשן טייפ הראשון של שינוי שם ולא את הסייב סטייט כשמגיע לכאן אחרי הדיספאצ
  switch(action.type) {
    case 'SAVE_STATE':      state.oldstate = action.payload;
      break; 
      case 'UNDO':
        action.payload = state.oldstate;
        break; 
  }
}, initialState);



