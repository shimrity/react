import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect, useRef } from 'react';
//import YouTubePlayer from 'youtube-player';
import './main.css';
import Player from '@vimeo/player';

function VimeoPlayer(props){
  const {id}=props;
  const VimeoPlayerDivRef= useRef(null)

  useEffect(function(){
    VimeoPlayerDivRef.current = new Player('handstick', {
      id: 19231868,
      width: 640
  });

  },[]);
  useEffect(function(){

  },[id]);



  return (
    <>
      <div ref={VimeoPlayerDivRef}> </div>
    </>

  )

}










const App = () => {
 
  const [playMode, setplayMode]=useState(false);
  return (
    <div>
      <h1>Hello World</h1>
      <VimeoPlayer id={19231868} ></VimeoPlayer>
     

    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
