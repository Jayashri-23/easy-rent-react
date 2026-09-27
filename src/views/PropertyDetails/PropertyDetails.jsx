import React from "react";

import { useParams, useNavigate } from "react-router-dom";
import properties from "../../data/properties";
import "./PropertyDetails.css";

function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const property = properties.find((item) => String(item.id) === String(id));

  if (!property) {
    return (
      <div className="not-found">
        <h2>Property Not Found</h2>
        <p>The property you are looking for does not exist.</p>

        <button onClick={() => navigate("/properties")}>
          Back to Properties
        </button>
      </div>
    );
  }

  return (
    <div className="property-details">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="details-container">
        <div className="details-image">
          {property.photos && property.photos.length > 0 ? (
            <img src={property.photos[0]} alt={property.title} />
          ) : (
            <div className="no-image">No Image Available</div>
          )}
        </div>

        <div className="details-info">
          <h1>{property.title}</h1>

          <p className="location">📍 {property.city}</p>

          <p>
            <strong>Property Type:</strong> {property.propertyType}
          </p>

          <p>
            <strong>Size:</strong> {property.size}
          </p>

          <p>
            <strong>Address:</strong> {property.address}
          </p>

          <p>
            <strong>Rating:</strong> ⭐ {property.rating}
          </p>

          <h2 className="rent">₹{property.rent}</h2>

          <button className="contact-btn" onClick={() => navigate("/contact")}>
            Contact Owner
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
