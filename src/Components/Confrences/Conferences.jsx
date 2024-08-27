import React from 'react';
import img8 from "../assets/8.jpeg"
import img9 from "../assets/9.jpeg"
import img10 from "../assets/10.jpeg"
import './confrences.css';

const Conferences = () => {
    return (
        <div className='confrences container' id='confrences'>
            <div className="text-containers">
                <h1 className='mainh1'>Conferences</h1>
            </div>
            <h2 className='text-heading'>Suncrop Group Annual and <br /> Dealers Confrences</h2>
            <div className='row'>
                <div className="col-md-6 col-sm-12 col-lg-4">
                    <div className="image-container">
                        <img className='service-img1 PART2' src={img8} alt="" />
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-lg-4">
                    <div className="image-container">
                        <img className='service-img1 PART2' src={img9} alt="" />
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-lg-4">
                    <div className="image-container">
                        <img className='service-img1 PART2' src={img10} alt="" />
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-lg-4">
                    <div className="image-container">
                        <img className='service-img1 PART2' src={img8} alt="" />
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-lg-4">
                    <div className="image-container">
                        <img className='service-img1 PART2' src={img9} alt="" />
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-lg-4">
                    <div className="image-container">
                        <img className='service-img1 PART2' src={img10} alt="" />
                    </div>
                </div>
            </div>
            </div>

    )
}

export default Conferences