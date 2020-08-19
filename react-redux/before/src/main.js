import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './header';
import Username from './username';
import Messages from './messages';
import NewMessage from './newMessage';


const App = (props) => (
  <Provider store={store}>
    <Header  username={store.Username}/>
  <Username  username={store.Username} messages={store.messages}/>
  <Messages messages={store.messages}/>
  <NewMessage  messages={store.messages} username={store.Username} />
</Provider>
);

ReactDOM.render(<App />, document.querySelector('main'));
