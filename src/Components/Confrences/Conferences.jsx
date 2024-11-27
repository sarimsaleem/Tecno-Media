import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import confrence1 from "./../../newAssets/confrence1.jpg"
import confrence2 from "./../../newAssets/confrence2.jpg"
import confrence3 from "./../../newAssets/confrence3.jpg"
import confrence4 from "./../../newAssets/confrence4.jpg"
import confrence5 from "./../../newAssets/confrence5.jpg"
import confrence6 from "./../../newAssets/confrence6.jpg"
import './confrences.css';

const Conferences = () => {
    const [open, setOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const images = [
        { src: confrence1, alt: "Conference 1" },
        { src: confrence2, alt: "Conference 2" },
        { src: confrence3, alt: "Conference 3" },
        { src: confrence5, alt: "Conference 4" },
        { src: confrence4, alt: "Conference 5" },
        { src: confrence6, alt: "Conference 6" }
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