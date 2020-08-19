import React from 'react';
import { connect } from 'react-redux';
import {receivedMessage} from './redux/actions';
import store from './redux/store';
import username from './username';


function mapStateToProps(state) {
    return {
  
      messages: state.messages,
      username: state.username,
      //nextId : state.nextId(),
      
       
    }
}

export default  connect(mapStateToProps)(function NewMessage(props){
const {dispatch, messages, username} = props;
function handleNewMessage(e)
{
    const newMessage= { from: username, text: document.querySelector('.newMessage').value }
    console.log(newMessage,messages.length);
    dispatch(receivedMessage(newMessage))
    document.querySelector('.newMessage').value='';
}
return (
    <div>
        <input type="textarea" placeholder="type new message..." className="newMessage"></input>
        <button onClick={handleNewMessage}>Send Message</button>
    </div>
)

})

