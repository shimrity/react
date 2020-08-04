import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { useState, useEffect } from 'react';

/*  "films": [
        "http://swapi.dev/api/films/1/", 
        "http://swapi.dev/api/films/2/", 
        "http://swapi.dev/api/films/3/", 
        "http://swapi.dev/api/films/6/"
    ],  */
function Film(props)
{
   const {url}=props;
  const [data ,setData] = useState(null);
   
  useEffect(function(){
  console.log("== > "+url);
    const $xhr = $.getJSON(url,setData)
  
     return function abort(){
      $xhr.abort();
    }
   },[])

   return(
     <>
     {data ? <h3>{data.title}</h3> : 'loading.......................'}
     </>
   )

}


function StarwarsCharacterInfo(props) 
{
  const {data ,id} = props;
  return(
    <>
      <pre>Debug: id = {id}</pre>
      <p><b>Name:</b> {data.name}</p>
      <p><b>Hair Color:</b> {data.hair_color}</p>
      <ul>               
           {data.films && data.films.map(function(url,i)  {
               
               return <li key={i}>  <Film url={url}></Film></li>;})}
                     
            </ul>
    
    </>
  )
}


function StarwarsCharacter(props) {
  const [data, setData] = useState({});
  const { id } = props;

  useEffect(function(){

    const $xhr = $.getJSON(`https://swapi.dev/api/people/${id}/`,setData);
  

    return function abort(){
      $xhr.abort();
    }

  },[id]);

  return (
    <>
    {data ? <StarwarsCharacterInfo id = {id} data={data}></StarwarsCharacterInfo>
      : 'loading data please wait...'}
    </>
  );
}

const App = () => {
  const [id, setId] = useState(1);

  return (
    <div>
      <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
      <StarwarsCharacter id={id} />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
