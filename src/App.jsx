import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import FilterIntegrity from "./components/FilterIntegrity";
import ScrollToTop from "./components/ScrollToTop";
import Turnkey from "./components/Turnkey";
import ClientMarquee from "./components/ClientMarquee";

export default function App() {
  return (
    <BrowserRouter basename="/SPF">
      <ScrollToTop />
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/filter-integrity" element={<FilterIntegrity />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/turnkey" element={<Turnkey />} />
        </Routes>
        
        {/* Trusted By Section (Visible globally) */}
        <ClientMarquee />
      </main>
      <Footer />
    </BrowserRouter>
  );
}