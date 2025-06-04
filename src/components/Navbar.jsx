import React from 'react';
import { FaInstagram } from 'react-icons/fa';


function Navbar() {
  const name = "Rikki";

  return (
    <nav className="navbar">
      <h1>{name}</h1>
        
      <div className="navbar-buttons">
        <a
          href="https://www.instagram.com/fortheloveofcolorr/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-button"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
