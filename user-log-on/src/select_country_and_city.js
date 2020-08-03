import React from 'react';
import { useState } from 'react';


const countriesAndCities = {
  Israel: ['Jerusalem', 'Tel Aviv', 'Raanana', 'Ramat Gan'],
  Jordan: ['Amman', 'Zarqa', 'Irbid', 'Aqaba'],
  Syria: ['Damascus', 'Hama', 'Idlib', 'Raqqa'],
  Egypt: ['Cairo', 'Alexandria', 'Giza'],
};

const SelectCountry = (props) => {
  const { selectedCountry, setSelectedCountry, countries } = props;

  return (
  <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
    <option disabled selected value>Please select a country</option>
    {countries.map((country, index) => (
      <option value={country}>{country}</option>
    ))}
  </select>
  );
};

const SelectCity = (props) => {
  const { selectedCity, setSelectedCity, cities } = props;

  return (
  <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
    <option disabled selected value>Please select a city</option>
    {cities.map((city, index) => (
      <option value={city}>{city}</option>
    ))}
  </select>
  );
};

export default function SelectCountryAndCity(props) {
  const { selectedCountry ,setSelectedCountry , selectedCity , setSelectedCity } = props;
 

  const countries = Object.keys(countriesAndCities);
  const cities = countriesAndCities[selectedCountry];

  function replaceCountry(newCountry) {
    setSelectedCountry(newCountry);
    setSelectedCity(null);
  }

  return (
    <div>
      <p>You selected {selectedCountry} / {selectedCity} </p>
      <SelectCountry
        countries={countries}
        selectedCountry={selectedCountry}
        setSelectedCountry={replaceCountry}
      />

      {cities &&
      <SelectCity
      cities={cities}
      selectedCity={selectedCity}
      setSelectedCity={setSelectedCity}
    />
    }
    </div>
  );
}

