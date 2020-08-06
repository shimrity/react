import React from 'react';
import { useState } from 'react';

export default function Carousel(props){
    const [currentImg, setCurrentImg] = useState(0);
  // console.log(React.Children.count(props.children));
    const numberOfImg = React.Children.count(props.children);

    function imgComponent(imgIndex) {
       
      //  console.log("the curren elemnt is ==>"+ currentImg);
        const imgs = React.Children.toArray(props.children);
        const img = imgs[imgIndex];
        return React.cloneElement(img);
      }  


    return (
        <div className="app">
          <button
           
            onClick={(e) => setCurrentImg((v) => {
                     if(v === 0)
                    return numberOfImg-1;
                      
                    else
                    return  v - 1 ;})}
          >&lt; Previous Img
          </button>
    
          <button
            
            onClick={(e) => setCurrentImg((v) =>{
                if(v === (numberOfImg-1))
                 return 0;
                else
                 return  v + 1;} )}
          >Next Page &gt;</button>
          { imgComponent(currentImg) }
        </div>
      );

}