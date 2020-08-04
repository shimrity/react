import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import YouTubePlayer from 'youtube-player';
import {useEffect,useState, Ref} from 'react';
import './main.css';

export default function MyYouTubePlayer(props)
{
   const {vId,  playMode, setplayMode} = props;
   const [videoId, setVideoId] = useState(vId);
   const divPlayer = useRef(null);
   const playerRef = useRef(null);
   useEffect(function(){
    playerRef.current  = YouTubePlayer(divPlayer.current);
     },[])
   
   useEffect(function(){
       const player = playerRef.current;
    player.loadVideoById(videoId);
    playMode ? player.playVideo() : player.pauseVideo();

    },[videoId,playMode])
   return(
       <>
       <div>
          <div> <input type="text" value={videoId} onChange={(e) => setVideoId(e.target.value)}></input>
          <button onClick={(e) => setplayMode(!playMode)}>play/Stop</button>
          </div>
           <div className="player-div" ref={divPlayer}></div>
       </div>

       </>
   )

}
MyYouTubePlayer.defaultProps = {
    videoId :'M7lc1UVf-VE',
    
};