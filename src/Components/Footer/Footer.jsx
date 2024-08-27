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
                    <div className="col-md-4">
                        <ul>
                            <li className='li-head'>About Us</li>
                            <li className='li-text'>We are specializes in planning, organizing, and executing events of all sizes, from corporate conferences and product launches to weddings and private parties.</li>
                            <li className='li-text'> Event management companies offer creative solutions tailored to the unique needs and goals of each client. </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul>
                            <li className='li-head'>Address</li>
                            <li className='li-text1 my-2'><span>Head Office</span> <br />
                            123 Maple Street Springfield, IL 62701
                            United States</li>
                            <li className='li-text1 my-2'><span>Branch Office</span><br />
                            456 Oak Avenue Denver, CO 80202 United States</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className='icon-ul'>
                            <li className='li-head'>
                                Contact Us
                            </li>
                            <div className="icons-p">
                                <li>
                                    <CiFacebook /> Facebook 
                                </li>
                                <li>
                                    <CiInstagram /> Instagram
                                </li>
                                <li>
                                    <FaWhatsapp /> Whatsapp
                                </li>
                                <li>
                                <CiMail /> E-mail
                                </li>
                            </div>
                        </ul>
                    </div>
                    <hr className='second-hr' />
                    <div className="copyRight">
                    <p className='text-center'>&copy; 2024 Tecno Media All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer