// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";

import logo from "./assets/millineum.jpeg";

function App() {
  return (
    <BrowserRouter>

      {/* NAVBAR */}

      <nav>

        {/* LEFT SIDE LOGO */}

        <div className="logo-container">

          <img
            src={logo}
            alt="Logo"
            className="logo"
          />

        </div>

        {/* RIGHT SIDE MENU */}

        <ul>

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/shop">Shop</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

        </ul>

      </nav>

      {/* ROUTES */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;