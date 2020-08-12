import React from 'react';
import ReactDOM from 'react-dom';
import { MyForm, UserDetails, SummaryPage, SelectHobbies } from './pages';
import { Page1, Page2 } from './hello_container';
import MyCarousel from './carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
//import './main.css';

const style = {
  width : "50%",
  height : "50%"

}
const App = () => {

  return (
    <div>
      <div style={style}>
    <Carousel >
      <div>
        <img src="../imeges/1.jpg" alt="1"></img>
        <p className="legend">Legend 1</p>
      </div>
      <div>
      <img src="../imeges/2.jpg" alt="1"></img>
        <p className="legend">Legend 2</p>
      </div>
      <div>
      <img src="../imeges/3.jpg" alt="1"></img>
        <p className="legend">Legend 2</p>
      </div>
        
        
   </Carousel>
  
   <MyCarousel>
        <img src="../imeges/1.jpg" style={style} alt="1"></img>
        <img src="../imeges/2.jpg" style={style} alt="2"></img>
        <img src="../imeges/3.jpg" style={style} alt="3"></img>
   </MyCarousel>
   </div>
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
