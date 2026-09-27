import React from 'react';
import { Link } from 'react-router-dom';


function PropertyCard({ property }) {
  return (
    <div className='property-card'>
        <img 
        src={property.image}
        alt={property.title}
        className='property-image'
        />

        <div className='property-info'>
            <h3>{property.title}</h3>

            <p className='location'>📍 {property.location} </p>
            <p className='property-type'>{property.type} . {property.bedrooms} BHK</p>
            
            <div>
                <strong>Rs.{property.price.toLocaleString()}/month</strong>
                <Link to={`/property/${property.id}`}> View Details</Link>
            </div>
        </div>
      
    </div>
  );
}

export default PropertyCard;
