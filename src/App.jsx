import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Home from "./views/Home/Home";
import Properties from "./views/Properties/Properties";
import PropertyDetails from "./views/PropertyDetails/PropertyDetails";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
export default App;
