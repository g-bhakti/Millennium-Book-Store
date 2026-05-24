// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";

import "./App.css";
import logo from "./assets/millineum.jpeg";
import visitorCard from "./assets/visiting-card.jpeg";
import shopImage from "./assets/shop.jpeg";

function App() {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>

      {/* NAVBAR */}

      <nav className="navbar">

        {/* LEFT SIDE */}

        <div className="logo-section">

          <img
            src={logo}
            alt="Millennium Logo"
            className="logo"
          />

          <h2 className="brand-name">
            Millennium Book Store
          </h2>

        </div>

        {/* RIGHT SIDE */}

        <ul className="nav-links">

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

      {/* VISIT SHOP BUTTON

      <div className="visit-shop-container">

        <button
          className="visit-shop-btn"
          onClick={() => setOpenModal(true)}
        >
          Visit Shop
        </button>

      </div> */}

      {/* MODAL */}

      {openModal && (

        <div className="modalOverlay">

          <div className="modalBox">

            <button
              className="closeBtn"
              onClick={() => setOpenModal(false)}
            >
              ✖
            </button>

            <h2>Millennium Book Stores</h2>

            {/* SHOP IMAGE */}

            <img
              src={shopImage}
              alt="Shop"
              className="visitorCard"
            />

            {/* VISITING CARD */}

            <img
              src={visitorCard}
              alt="Visitor Card"
              className="visitorCard"
            />

            {/* ADDRESS */}

            <p className="shopAddress">
              Shop No-3, Rishabh Shopping Center,
              Opp. Anjuman High School,
              Sector 9, Vashi, Navi Mumbai - 400703
            </p>

            {/* GOOGLE MAP */}

            <iframe
              title="shop-location"
              src="https://www.google.com/maps?q=Millennium+Book+Stores+Vashi+Navi+Mumbai&output=embed"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>

          </div>

        </div>

      )}

      {/* ROUTES */}

      <Routes>

        <Route
          path="/"
          element={<Home setOpenModal={setOpenModal} />}
        />

        <Route
          path="/shop"
          element={<Shop />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="*"
          element={<Navigate to="/" />}
        />

      </Routes>

    </>
  );
}

export default App;