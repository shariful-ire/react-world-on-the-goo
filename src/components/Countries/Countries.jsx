import React, { use, useState } from 'react';
import Country from '../country/Country';
import './Countries.css'


const Countries = ({countriesPromise}) => {
  const [visitedCountries, setVisitedCountries]=useState([]);

  const handleVisitedCountries=(country)=>{
    console.log('handle visited country clicked', country);
    const newVisitedCountry = [...visitedCountries,country];
    setVisitedCountries(newVisitedCountry);
  }


  const countriesData= use(countriesPromise);
  const countries=countriesData.countries;
  
  console.log(countries)
  
  return (
    <div>
        <div className='bg-gray-300 h-16 mx-auto my-auto p-4 flex rounded-xl mb-6 '> 
              <h1 className=' mx-auto my-auto font-bold text-green-600'>In the countries: {countries.length}</h1>
              <p className=' mx-auto my-auto  font-bold text-green-600'>Total Country visited : {visitedCountries.length}</p>

        </div>
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