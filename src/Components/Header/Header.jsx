import React from 'react';
import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png';
import Carousel from 'react-bootstrap/Carousel';
import main from '../assets/main.jpg';
import main2 from "../assets/crousel 2.jpg"
import main3 from "../assets/crousel3.jpg"
const Header = () => {
    return (
        <div className='parent' id='home'>
            <div className="imgDiv">
                <Navbar expand="lg" className="navbar">
                    <Container>
                        <Navbar.Brand href="#home"><img className='logo' src={logo} alt="Logo" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link className='navLinks' href="/">Home</Nav.Link>
                                <Nav.Link className='navLinks' href="#contact">About</Nav.Link>
                                <Nav.Link className='navLinks' href="#services">Services</Nav.Link>
                                <Nav.Link className='navLinks' href="#fabrication">Fabrication</Nav.Link>
                                <Nav.Link className='navLinks' href="#confrences">Conferences</Nav.Link>
                                <Nav.Link className='navLinks' href="#product">Launching</Nav.Link>
                                <Nav.Link className='navLinks' href="#interior"> Projects</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Carousel indicators={false}> {/* Disabling indicators */}
                    <Carousel.Item>
                        <img className="d-block w-100" src={main} alt="First slide" />
                        <Carousel.Caption className="left-align-text">
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={main2} alt="Second slide" />
                        <Carousel.Caption className="left-align-text">
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={main3} alt="Third slide" />
                        <Carousel.Caption className="left-align-text">
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default Header;
