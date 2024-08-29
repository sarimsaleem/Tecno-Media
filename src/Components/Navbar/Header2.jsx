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
      <div className='container'>
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className={`navbar-nav ${menuOpen ? 'show' : ''}`}>
          <li className="nav-item"><a href="#fabrication">Fabrication</a></li>
          <li className="nav-item"><a href="#services">Services</a></li>
          <li className="nav-item"><a href="#confrences">Confrences</a></li>
          <li className="nav-item"><a href="#product">Product Launching</a></li>
          <li className="nav-item"><a href="#interior">Interior Projects</a></li>
        </ul>
        <div className="navbar-icons"></div>
        <FaBars className="menu-icon" onClick={handleMenuClick} />
      </div>
    </nav>
  );
}

export default Header2;



// .navbar {
//   position: fixed;
//   top: 0;
//   width: 100%;
//   background-color:#ffffff;
//   color: #000;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding-block: 5px;
//   z-index: 1000;
//   transition: background-color 0.3s;
// }
// .navbar.scrolled {
//   background-color: #ffffff;
//   box-shadow: 3px 3px 10px 5px #00000014;
// }

// .navbar-nav {
//   list-style: none;
//   display: flex;
//   flex-direction: row;
//   margin: 0;
//   padding: 0;
// }

// .nav-item {
//   margin: 0 10px;
// }

// .nav-item a {
//   color: #000000;
//   text-decoration: none;
//   padding: 10px 15px;
//   display: block;
//   transition: background 0.3s;
//   font-size: 19px;
//   font-weight: 500;
// }

// .nav-item a:hover {
//   border-bottom: 1px solid #000000;
// }

// .navbar-icons {
//   display: flex;
//   align-items: center;
// }

// .navbar-logo > img {
//   height: 55px;
// }

// .menu-icon {
//   display: none;
// }

// /* .FJKB {
//   padding: 0px;
// } */

// /* Media Query for small devices */
// @media (max-width: 768px) {
//   .navbar {
//       background-color: white;
//       color: #000;
//   }

//   .navbar-nav {
//       display: none;
//       flex-direction: column;
//       width: 100%;
//       position: absolute;
//       top: 70px;
//       left: 0;
//       background-color: #000000af;
//       transition: all 0.5s;
//   }

//   .nav-item {
//       margin: 0;
//   }

//   .nav-item a {
//       font-size: 13px;
//       margin: 5px 0;
//       padding: 10px 13px;
//       color: white;
//   }

//   .navbar-logo > img {
//       height: 45px;
//   }

//   .navbar-nav.show {
//       display: flex;
//   }

//   .navbar-icons {
//       display: none;
//   }

//   .menu-icon {
//       display: block;
//       font-size: 20px;
//       cursor: pointer;
//   }
// }

// /* Media Query for medium devices */
// @media (min-width: 768px) and (max-width: 991px) {
//   .navbar {
//       background-color: white;
//       color: #000;
//   }

//   .navbar-nav {
//       flex-direction: column;
//       width: 200px;
//       height: 100vh;
//       position: fixed;
//       top: 0;
//       left: 0;
//       background-color: #000000af;
//       display: none;
//       transition: all 0.5s;
//   }

//   .nav-item {
//       margin: 0;
//   }

//   .nav-item a {
//       font-size: 16px;
//       margin: 5px 0;
//       padding: 10px 13px;
//       color: white;

//   }

//   .navbar-logo > img {
//       height: 45px;
//   }

//   .navbar-nav.show {
//       display: flex;
//   }

//   .menu-icon {
//       display: block;
//       font-size: 20px;
//       cursor: pointer;
//   }
// }

// @media (min-width: 992px) and (max-width: 1200px) {
//   .nav-item a {
//       font-size: 16px;
//   }
// }