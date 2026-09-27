import React from 'react'
import { Link } from "react-router-dom";
import './About.css';

function About() {
  return (
    <div className="about-page">

      {/* Hero */}
      <section className="about-hero">
        <p className="about-label">ABOUT EASYRENT</p>

        <h1>
          Finding your next home
          <br />
          made simple.
        </h1>

        <p>
          EasyRent helps you discover rental properties quickly,
          compare your options, and find a place that fits your needs.
        </p>
      </section>


      {/* About EasyRent */}
      <section className="about-section">
        <div className="about-text">
          <p className="section-label">OUR PLATFORM</p>

          <h2>Everything you need to find a rental home</h2>

          <p>
            EasyRent is a React-based rental property platform designed
            to make property discovery simple and convenient.
          </p>

          <p>
            Instead of browsing through complicated listings, users can
            search properties, filter them by type and location, sort
            them according to price, and view complete property details.
          </p>
        </div>

        <div className="about-box">
          <div>
            <span>20+</span>
            <p>Properties</p>
          </div>

          <div>
            <span>6</span>
            <p>Locations</p>
          </div>

          <div>
            <span>5</span>
            <p>Property Types</p>
          </div>
        </div>
      </section>


      {/* How it works */}
      <section className="how-section">
        <p className="section-label">HOW IT WORKS</p>

        <h2>Find a property in 3 simple steps</h2>

        <div className="steps">

          <div className="step">
            <span>01</span>
            <h3>Search</h3>
            <p>
              Search for properties using their name or location.
            </p>
          </div>

          <div className="step">
            <span>02</span>
            <h3>Filter</h3>
            <p>
              Narrow your options using property type and location.
            </p>
          </div>

          <div className="step">
            <span>03</span>
            <h3>Explore</h3>
            <p>
              View detailed information about the property you like.
            </p>
          </div>

        </div>
      </section>


      {/* Features */}
      <section className="features-section">
        <p className="section-label">WHY EASYRENT</p>

        <h2>Designed to make renting easier</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Easy Search</h3>
            <p>
              Quickly search for properties based on your requirements.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🏠</div>
            <h3>Different Properties</h3>
            <p>
              Explore apartments, flats, houses, studios and villas.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📍</div>
            <h3>Multiple Locations</h3>
            <p>
              Discover rental options across different cities.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Price Sorting</h3>
            <p>
              Compare properties by sorting them from low to high
              or high to low price.
            </p>
          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="about-cta">
        <h2>Ready to find your next home?</h2>

        <p>
          Explore our available rental properties and find a place
          that feels right for you.
        </p>

        <Link to="/properties" className="cta-button">
          Explore Properties
        </Link>
      </section>

    </div>
  );
}

export default About;