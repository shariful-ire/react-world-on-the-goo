import React from 'react';
import './Country.css';

const Country = ({ country }) => {

    

    return (
        <div className='country'>
            <img src={country?.flags?.flags.png}></img>
            <h3>
                Common Name: {country.name.common}
            </h3>
            <h3>
               Official Name: {country.name.official}
            </h3>
            <p>Population: {country.population.population}</p>
           

        </div>
    );
};

export default Country;