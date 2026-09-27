import React from 'react';
import { useState } from 'react';
import properties from '../data/properties';
import PropertyCard from '../components/PropertyCard';


function Properties() {
    const [search, setSearch] = useState("");
    const [type, setType] = useState("All");
    const [location, setLocation] = useState("All");
    const [sort, setSort] = useState("default");

    

    const filteredProperties = properties.filter((property) =>{
        return(
            property.title.toLocaleLowerCase().includes(search.toLowerCase()) ||
            property.location.toLowerCase().includes(search.toLowerCase())
        );
    });

   
  return (
    <div className='properties-page'>
        <h1>Available Properties</h1>

        <div className='search-box'>
            <input
            type='text'
            placeholder='Search by property or location..'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
        </div>

       {filteredProperties.length > 0 ? (
        <div className='property-grid'>
            
            {filteredProperties.map((property) => (
                <PropertyCard 
                key={property.id}
                property={property}
                />
            ) )}
        </div>
       ) : (
        <div>
            <img src="/images/not-found.png" alt='Not Found'/>
            <h3>No Properties Found</h3>
            <p>Try searching for something else.</p>
        </div>
       )}

    </div>
  );
}

export default Properties;
