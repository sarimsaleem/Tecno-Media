import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaSearch, FaBars } from 'react-icons/fa';
import './Nav.css';
import logo from "../assets/logo.png";

function Header2() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className='container FJKB'>
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className={`navbar-nav ${menuOpen ? 'show' : ''}`}>
          <li className="nav-item"><a href="#fabrication">Fabrication</a></li>
          <li className="nav-item"><a href="#services">Services</a></li>
          <li className="nav-item"><a href="#confrences">Confrences</a></li>
          <li className="nav-item"><a href="#product">Product Launching</a></li>
          <li className="nav-item"><a href="#product">Interior Projects</a></li>
        </ul>
        <div className="navbar-icons"></div>
        <FaBars className="menu-icon" onClick={handleMenuClick} />
      </div>
    </nav>
  );
}

export default Header2;
