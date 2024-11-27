import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import img8 from "../assets/8.jpeg";
import img9 from "../assets/9.jpeg";
import img10 from "../assets/10.jpeg";
import './confrences.css';

const Conferences = () => {
    const [open, setOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const images = [
        { src: img8, alt: "Conference 1" },
        { src: img9, alt: "Conference 2" },
        { src: img10, alt: "Conference 3" },
        { src: img8, alt: "Conference 4" },
        { src: img9, alt: "Conference 5" },
        { src: img10, alt: "Conference 6" }
    ];

    const openLightbox = (index) => {
        setPhotoIndex(index);
        setOpen(true);
    };

    return (
        <div className='confrences container' id='confrences'>
            <div className="text-containers">
                <h1 className='mainh1'>Conferences</h1>
            </div>
            <h2 className='text-heading'>Suncrop Group Annual and <br /> Dealers Conferences</h2>
            <div className='row'>
                {images.map((image, index) => (
                    <div className="col-md-6 col-sm-12 col-lg-4" key={index}>
                        <div className="image-container">
                            <img
                                className='service-img1 PART2'
                                src={image.src}
                                alt={image.alt}
                                onClick={() => openLightbox(index)}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {open && (
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={images.map(image => ({
                        src: image.src,
                        alt: image.alt
                    }))}
                    index={photoIndex}
                    onClose={() => setOpen(false)}
                    fullScreen
                    zoom={{
                        maxZoomPixelRatio: 3,
                    }}
                    carousel={false}
                />
            )}
        </div>
    );
};

export default Conferences;