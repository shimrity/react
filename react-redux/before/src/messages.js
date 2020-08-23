import React from 'react';
import { connect } from 'react-redux';
import {deleteMessage} from './redux/actions';

function mapStateToProps(state) {
  return {

    messages: state.messages.messages,
    
  };
}

export default connect(mapStateToProps)(function Messages(props) {
  const {dispatch, messages } = props;

  function remove(m){
      dispatch(deleteMessage(m))
  }
  return (
    <div className='username'>
      <ul>
      Messages:
         {messages.map((m,i) => (<li key={i}>
            <p>{m.text}    
            <a href="#" onClick={(e) => remove(m)}>    remove</a>
            </p> 
            
           
             </li>))}
      </ul>
    </div>
  );
});