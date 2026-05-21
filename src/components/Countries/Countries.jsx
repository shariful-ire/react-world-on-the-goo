import React, { use, useState } from 'react';
import Country from '../country/Country';
import './Countries.css'


const Countries = ({countriesPromise}) => {
  const [visitedCountries, setVisitedCountries]=useState([]);

  const handleVisitedCountries=(country)=>{
    console.log('handle visited country clicked', country);
  }


  const countriesData= use(countriesPromise);
  const countries=countriesData.countries;
  
  console.log(countries)
  
  return (
    <div>
      <h1>In the countries: {countries.length}</h1>
      <p>Total Country visited : {visitedCountries.length}</p>

       <div className='Countries'>
          {
            countries.map(country=><Country
            key={country.cca3.cca3}
            country ={country}
            handleVisitedCountries={handleVisitedCountries}></Country>)
          }
      </div>
    </div>

   
  );
};

export default Countries;