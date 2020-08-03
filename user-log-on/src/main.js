import React from 'react';
import ReactDOM from 'react-dom';
import SelectCountryAndCity from './select_country_and_city';
import UserLogOn from  './user-log-on';
import UserProfile from './user-profilie';
import NextPrevButton from './next-prev';
import { useState } from 'react';

import '../css/main.css';




const App = () => {

  const [ selectedCountry, setSelectedCountry ] = useState(null);
  const [ selectedCity, setSelectedCity ] = useState(null);
  const [ userName, setUserName ] = useState(null);
  const [ password, setPassword ] = useState(null);
  const [ mode, setMode] = useState(0);

  return (
    <div>
       {mode==0 &&
          <UserLogOn userName={userName} setUserName={setUserName}
                    password={password} setPassword={setPassword}></UserLogOn>
      }
      {mode==1 &&
           <SelectCountryAndCity selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry}
                            selectedCity={selectedCity} setSelectedCity={setSelectedCity}></SelectCountryAndCity>
      }     
      {mode==2 &&
            <UserProfile userName={userName} password={password} selectedCity={selectedCity} selectedCountry={selectedCountry}></UserProfile>
      }
      
      <NextPrevButton mode={mode} setMode={setMode}></NextPrevButton>
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
