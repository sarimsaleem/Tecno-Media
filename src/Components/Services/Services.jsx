import React from 'react'
import "./services.css"
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/44.jpg"
const Services = () => {
    return (
        <div className='Services' id='services'>
            <div className='container'>
                <h1 className='mainh11'>Services We Provide</h1>
                <div className='row'>
                    <div className="col-md-6 col-sm-12 col-lg-4 col-xl-3 ">
                        <div className="image-container">
                            <img className='service-img1' src={img1} alt="" />
                            <div class="overlay"></div>
                            <div className="overlay-text">Fabrication</div></div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-4 col-xl-3">
                        <div className="image-container">
                            <img className='service-img1' src={img2} alt="" />
                            <div class="overlay"></div>
                            <div className="overlay-text">Printing</div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-4 col-xl-3">
                        <div className="image-container">
                            <img className='service-img1' src={img3} alt="" />
                            <div class="overlay"></div>
                            <div className="overlay-text">Media Solutions</div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-4 col-xl-3">
                        <div className="image-container">
                            <img className='service-img1' src={img4} alt="" />
                            <div class="overlay"></div>
                            <div className="overlay-text">Ambiance</div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-6 col-sm-12 col-lg-4 col-xl-3">
                        <div className="image-container">
                            <img className='service-img1' src={img1} alt="" />
                            <div class="overlay"></div>
                            <div className="overlay-text">Event Management</div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-4 col-xl-3">
                        <div className="image-container">
                            <img className='service-img1' src={img2} alt="" />
                            <div class="overlay"></div>
                            <div className="overlay-text">Furniture</div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-4 col-xl-3">
                        <div className="image-container">
                            <img className='service-img1' src={img3} alt="" />
                            <div class="overlay"></div>
                            <div className="overlay-text">Product Launching</div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-4 col-xl-3">
                        <div className="image-container">
                            <img className='service-img1' src={img4} alt="" />
                            <div class="overlay"></div>
                            <div className="overlay-text">Conference Event</div>
                        </div>
                    </div>
                </div>
                {/* <div className='row'>
                    <div className="col-md-6 col-sm-12 col-lg-4 col-xl-3">
                        <div className="image-container">
                            <img className='service-img1' src={img1} alt="" />
                            <div class="overlay"></div>
                            <div className="overlay-text">Corprrate Events</div>
                        </div>

                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-4 col-xl-3">
                        <div className="image-container">
                            <img className='service-img1' src={img2} alt="" />
                            <div class="overlay"></div>
                            <div className="overlay-text">Wedding Events</div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-4 col-xl-3">
                        <div className="image-container">
                            <img className='service-img1' src={img3} alt="" />
                            <div class="overlay"></div>
                            <div className="overlay-text">Float Advertiseing</div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-4 col-xl-3">
                        <div className="image-container">
                            <img className='service-img1' src={img4} alt="" />
                            <div class="overlay"></div>
                            <div className="overlay-text">3D & 2D Printing</div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Services