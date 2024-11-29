import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import "./footer.css"
const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 column">
                        <ul className='first-ul'>
                            <li className='li-head'>About Us</li>
                            <li className='li-text'>We are specializes in planning, organizing, and executing events of all sizes, from corporate conferences and product launches to weddings and private parties.</li>
                            <li className='li-text'> Event management companies offer creative solutions tailored to the unique needs and goals of each client. </li>
                        </ul>
                    </div>
                    <div className="col-md-4 column">
                        <ul>
                            <li className='li-head'>Info</li>
                            <li className='li-text my-2'><span>Address</span> <br />
                                Suite # 512, 5th Floor, Aman Business Center Johar Town, Lahore
                            </li>
                            <li className='li-text my-2'><span>Phone</span><br />
                                +923334496258, 04235310888</li>
                        </ul>
                    </div>
                    <div className="col-md-4 column">
                        <ul className='icon-ul'>
                            <li className='li-head'>
                                Contact Us
                            </li>
                            <div className="icons-p">
                                <li>
                                    <a href="https://www.facebook.com/technomedia92/" target="_blank" rel="noopener noreferrer">
                                        <CiFacebook /> Facebook
                                    </a>
                                </li>
                                {/* <li>
                                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                        <CiInstagram /> Instagram
                                    </a>
                                </li> */}
                                <li>
                                    <a href="tel:+923334496258" target="_blank" rel="noopener noreferrer">
                                        <FaWhatsapp /> Whatsapp
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:ansabkhan93@yahoo.com">
                                        <CiMail /> E-mail
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <hr className='second-hr' />
                    <div className="copyRight">
                        <p className='text-center copyText'>&copy; 2024 Tecno Media All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer