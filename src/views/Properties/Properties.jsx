import React from 'react';
import { useEffect, useState } from "react";
import propertiesData from "../../data/properties";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import Select from "../../components/Select/Select";
import "./Properties.css";

function Properties() {

  const [searchTerm, setSearchTerm] = useState("");

  const [filterValues, setFilterValues] = useState({
    propertyType: "",
    city: ""
  });

  const [sortPrice, setSortPrice] = useState("");

  const [properties, setProperties] = useState(propertiesData);


  useEffect(() => {

    let filteredProperties = propertiesData.filter((property) => {

      const {
        propertyType,
        city
      } = filterValues;


      // Search
      if (
        searchTerm && !property.title.toLowerCase() 
        .includes(searchTerm.toLowerCase()) && !property.city
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      ) {
        return false;
      }

      if (
        propertyType && property.propertyType !== propertyType
      ) {
        return false;
      }

      if (
        city && property.city !== city
      ) {
        return false;
      }
        return true;
    });


    if (sortPrice === "low") {

      filteredProperties.sort(
        (a, b) => a.rent - b.rent
      );

    }

    if (sortPrice === "high") {

      filteredProperties.sort(
        (a, b) => b.rent - a.rent
      );

    }


    setProperties(filteredProperties);

  }, [filterValues, searchTerm, sortPrice]);


  return (
    <div className="properties-page">

      <h1>Available Properties</h1>

      <p>
        Find your perfect rental property
      </p>


      <div className="search-box">

        <input
          type="text"
          placeholder="Search by property or location..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
        />

      </div>

      <div className="filters">

       <Select
    value={filterValues.propertyType}
    onChange={(e) =>
      setFilterValues({
        ...filterValues,
        propertyType: e.target.value
      })
    }
    options={[
      { label: "All Property Types", value: "" },
      { label: "Apartment", value: "Apartment" },
      { label: "Flat", value: "Flat" },
      { label: "House", value: "House" },
      { label: "Studio", value: "Studio" },
      { label: "Villa", value: "Villa" }
    ]}
  />


        {/* Location */}
  <Select
    value={filterValues.city}
    onChange={(e) =>
      setFilterValues({
        ...filterValues,
        city: e.target.value
      })
    }
    options={[
      { label: "All Locations", value: "" },
      { label: "Pune", value: "Pune" },
      { label: "Nashik", value: "Nashik" },
      { label: "Mumbai", value: "Mumbai" },
      { label: "Nagpur", value: "Nagpur" },
      { label: "Aurangabad", value: "Aurangabad" },
      { label: "Kolhapur", value: "Kolhapur" }
    ]}
  />


   {/* Sort */}
  <Select
    value={sortPrice}
    onChange={(e) =>
      setSortPrice(e.target.value)
    }
    options={[
      { label: "Sort by Price", value: "" },
      { label: "Price: Low to High", value: "low" },
      { label: "Price: High to Low", value: "high" }
     ]}
        />

      </div>


      {/* Properties */}

      {properties.length > 0 ? (

        <div className="property-grid">

          {properties.map((property) => (

            <PropertyCard
              key={property.id}
              property={property}
            />

          ))}

        </div>

      ) : (

        <div className="no-results">

          <img
            src="/images/not-found.png"
            alt="No properties found"
          />

        </div>

      )}

    </div>
  );
}

export default Properties;