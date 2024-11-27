import React from 'react'
import "./about.css"
const About = () => {
    return (
        <div className='contact' id='contact'>
            <div className="container">
                <div className='row'>
                    <div className="col-md-6">
                        <h1 className='about-head'>About Us</h1>
                        <hr className='first-hr' />
                        <div className="about-us-container">
                            <p>
                                Welcome to <strong className="company-name">Tecno Media</strong>, where innovation meets excellence. Our
                                journey began with a simple idea: to make a difference in the industry
                                by providing top-quality products and services to our valued customers.
                                Over the years, we have grown into a trusted name, known for our
                                commitment to quality and customer satisfaction.
                            </p>
                            <p>
                                At <strong className="company-name">Tecno Media</strong>, we believe in the power of collaboration and
                                innovation. Our team of dedicated professionals works tirelessly to
                                bring you the best solutions tailored to your needs. We are passionate
                                about what we do and are always striving to exceed expectations.
                            </p>
                            <p>
                                Our mission is to deliver value to our customers by offering products
                                that are not only reliable but also cutting-edge. We are constantly
                                evolving, embracing new technologies, and adapting to the ever-changing
                                market landscape.
                            </p>
                            <p>
                                Thank you for being a part of our journey. We look forward to continuing
                                to serve you with the same dedication and excellence that has become our
                                hallmark.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h1 className='about-head'>Contact Us</h1>
                        <hr className='first-hr' />
                        <form
                            className="contact-form"
                            onSubmit={(e) => {
                                e.preventDefault(); // Prevent form's default submit behavior

                                const name = e.target.name.value;
                                const email = e.target.email.value;
                                const subject = e.target.subject.value;
                                const message = e.target.message.value;

                                const mailtoLink = `mailto:sarimsaleem07@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
                                    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
                                )}`;

                                window.location.href = mailtoLink;
                            }}
                        >
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" name="subject" placeholder="Subject" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
                            </div>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About