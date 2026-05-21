import React, { useState } from 'react';
import './Country.css';

const Country = ({ country, handleVisitedCountries }) => {

    const [visited, setVisited]= useState(false);

    const handleVisited=()=>{
        setVisited(!visited);
        handleVisitedCountries(country);

    }

    

    return (
        <div className={`country ${visited? 'country-visited' : 'country-not-visited'}`}>
            <img src={country?.flags?.flags.png}></img>
            <h3>
                Common Name: {country.name.common}
            </h3>
            <h3>
               Official Name: {country.name.official}
            </h3>
            <p>Population: {country.population.population}</p>
           
            <button onClick={handleVisited}>
            {
                visited? 'Visited': 'Not-visited'
            }
            </button>
        </div>
    );
};

export default Country;