import React from 'react'
import int1 from "../assets/int1.jpeg"
import int2 from "../assets/int2.jpeg"
// import int3 from "../assets/int3.jpeg"
import int4 from "../assets/int4.jpeg"
import int5 from "../assets/int5.jpeg"
import int6 from "../assets/int6.jpeg"
import "./interior.css"

const Interior = () => {
    return (
        <div className='interior' id='interior'>
            <div className='container'>
                <div className="text-containers">
                    <h1 className='mainh1'>Interior Project</h1>
                </div>
                <h2 className='text-heading'>Advance LABs and collection centers all over Pakistan</h2>
                <div className='row'>
                    <div className="col-md-8">
                        <div className="image-contain">
                            <img src={int2} className='interiorImg' alt="Fabrication 1" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="image-contain">
                            <img src={int1} className='interiorImg' alt="Fabrication 1" />
                        </div>
                    </div>
                </div>
                <h2 className='text-heading'>Office Interior in Dubai</h2>
                <div className='row'>
                    <div className="col-md-4">
                        <div className="image-contain">
                            <img src={int6} className='interiorImg' alt="Fabrication 1" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="image-contain">
                            <img src={int4} className='interiorImg' alt="Fabrication 1" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="image-contain">
                            <img src={int5} className='interiorImg' alt="Fabrication 1" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Interior