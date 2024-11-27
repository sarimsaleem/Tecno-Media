import React from 'react';
import './header.css';
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from "./../../newAssets/carousel1.jpg"
import carousel2 from "./../../newAssets/carousel2.jpg"
import carousel3 from "./../../newAssets/carousel3.jpg"
const Header = () => {
    return (
        <div className='parent' id='home'>
            <div className="imgDiv">
                <Carousel indicators={false}> {/* Disabling indicators */}
                    <Carousel.Item>
                        <img className="d-block w-100" src={carousel3} alt="First slide" />
                        <Carousel.Caption className="left-align-text">
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={carousel2} alt="Second slide" />
                        <Carousel.Caption className="left-align-text">
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={carousel1} alt="Third slide" />
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
