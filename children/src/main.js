import React from 'react';
import ReactDOM from 'react-dom';
import { MyForm, UserDetails, SummaryPage, SelectHobbies } from './pages';
import { Page1, Page2 } from './hello_container';
import Carousel from './carousel';
import './main.css';


const App = () => {

  return (
    <div>
    <Carousel>
        <img src="../imeges/1.jpg" alt="1"></img>
        <img src="../imeges/2.jpg" alt="2"></img>
        <img src="../imeges/3.jpg" alt="3"></img>
   </Carousel>
     
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
