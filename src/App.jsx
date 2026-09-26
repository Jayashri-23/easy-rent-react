import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Properties from './pages/Properties';
import PropertyDetails from './pages/PropertyDetails';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/properties' element={<Properties />}/>
      <Route path='/property/:id' element={<PropertyDetails />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
    </>
  );
}
export default App;
