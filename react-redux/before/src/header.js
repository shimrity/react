import React from 'react';
import { connect } from 'react-redux';

function setStateToProp(state){
    return {
        username : state.account.username,
        messages: state.messages.messages,
    }
}
export default connect(setStateToProp)(function Header(props){
const {username, messages} = props;

return( 
    <>
    <h1>hello {username} you Have {messages.length} messages</h1>
    </>
);


})