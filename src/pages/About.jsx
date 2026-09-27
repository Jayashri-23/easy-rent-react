import React from 'react'

function About() {
  return (
    <div className='about-page'>
      <section className='about-hero'>
      <h1>About EasyRent</h1>
      <p>
        Finding a comfortable place to live should be simple.
      </p>
     </section>
     <section className='about-content'>
      <h2>What is EasyRent?</h2>

      <p>
        EasyRent is a simple rental property platform designed to help users discover homes, apartments, flats, and other rental prperties in different locations.
      </p>
      <p>
        User can search for properties , filter them by type and location, sort them by price, and view detailed information about each property.
      </p>
     </section>
     <section className='about-features'>
      <h2>Why EasyRent?</h2>
      <div className='feature-grid'>
        <div className='feature-card'>
        <h3> 🔎 Easy Search </h3>
        <p>Find properties quickly using our search features.</p>
        </div>
        <div className='feature-card'>
          <h3> 🏡Many Properties</h3>
          <p>Explore different types of rental properties.</p>
        </div>
        <div className='feature-card'>
          <h3>📍Multiple Locations</h3>
          <p>Find rental properties in different cities.</p>
        </div>
        <div className='feature-card'>
          <h3>💰Price Sorting</h3>
          <p>Sort properties according to your budget.</p>
        </div>
      </div>
     </section>
    </div>
  );
}

export default About;
