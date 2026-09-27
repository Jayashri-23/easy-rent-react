import React from "react";
import { useNavigate } from "react-router-dom";
import properties from "../../data/properties";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import "./Home.css";

function Home() {

  const navigate = useNavigate();


  const featuredProperties = properties.slice(0, 4);

  return (
    <div className="home-page">


      <section className="hero-section">

        <div className="hero-content">

          <p className="hero-small-text">
            FIND YOUR PERFECT HOME
          </p>

          <h1>
            Find a place you'll
            <br />
            love to call home
          </h1>

          <p className="hero-description">
            Discover comfortable and affordable rental
            properties in your favorite locations.
          </p>

          <button
            className="hero-button"
            onClick={() => navigate("/properties")}
          >
            Browse Properties
          </button>

        </div>

      </section>



      <section className="why-section">

        <h2>Why Choose EasyRent?</h2>

        <p className="section-description">
          Finding a rental home doesn't have to be difficult.
        </p>


        <div className="features">

          <div className="feature-card">

            <div className="feature-icon">
              🔍
            </div>

            <h3>Easy Search</h3>

            <p>
              Search and filter properties according
              to your needs.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              🏠
            </div>

            <h3>Multiple Properties</h3>

            <p>
              Explore different houses, flats,
              apartments and villas.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              ⭐
            </div>

            <h3>Simple Experience</h3>

            <p>
              Find property details quickly and
              easily.
            </p>

          </div>

        </div>

      </section>



      <section className="featured-section">

        <div className="section-heading">

          <div>
            <h2>Featured Properties</h2>

            <p>
              Explore some of our available properties.
            </p>
          </div>

          <button
            className="view-all-button"
            onClick={() => navigate("/properties")}
          >
            View All
          </button>

        </div>


        <div className="property-grid">

          {featuredProperties.map((property) => (

            <PropertyCard
              key={property.id}
              property={property}
            />

          ))}

        </div>

      </section>

    </div>
  );
}

export default Home;