import React from "react";
import { useNavigate } from "react-router-dom";
import "./PropertyCard.css";

function PropertyCard({ property }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/property/${property.id}`);
  };

  return (
    <div className="property-card">

      <div className="property-image">
        {property.photos && property.photos.length > 0 ? (
          <img
            src={property.photos[0]}
            alt={property.title}
          />
        ) : (
          <div className="no-image">
            No Image Available
          </div>
        )}
      </div>

      <div className="property-info">

        <h2>{property.title}</h2>

        <p className="property-location">
          📍 {property.city}
        </p>

        <p>
          <strong>Type:</strong> {property.propertyType}
        </p>

        <p>
          <strong>Size:</strong> {property.size}
        </p>

        <p>
          <strong>Rating:</strong> ⭐ {property.rating}
        </p>

        <h3 className="property-rent">
          ₹{property.rent} / month
        </h3>

        <button
          className="details-btn"
          onClick={handleViewDetails}
        >
          View Details
        </button>

      </div>

    </div>
  );
}

export default PropertyCard;