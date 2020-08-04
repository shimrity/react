import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect, useRef } from 'react';
//import YouTubePlayer from 'youtube-player';
import './main.css';
import MyYouTubePlayer from './youtube';

const App = () => {
 
  const [playMode, setplayMode]=useState(false);
  return (
    <div>
      <h1>Hello World</h1>
      <MyYouTubePlayer vId="M7lc1UVf-VE" playMode={playMode}  setplayMode={setplayMode}></MyYouTubePlayer>
     

    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
