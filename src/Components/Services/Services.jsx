import React, { useState } from 'react';
import './services.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import img1 from "./../../newAssets/services1.jpg"
import img2 from "./../../newAssets/services2.jpg"
import img3 from "./../../newAssets/services3.jpg"
import img4 from "./../../newAssets/services4.jpg"
import img5 from "./../../newAssets/services5.jpg"
import img6 from "./../../newAssets/services6.jpg"
import img7 from "./../../newAssets/services7.jpg"
import img8 from "./../../newAssets/services8.jpg"
import img9 from "./../../newAssets/services9.jpg"
const Services = () => {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [
    { src: img1, label: 'Fabrication' },
    { src: img2, label: 'Ambiance' },
    { src: img3, label: '⁠Conference & Corporate Events' },
    { src: img4, label: 'Float designing' },
    { src: img5, label: 'Furniture'},
    { src: img6, label: '⁠Interior Designing'},
    { src: img7, label: 'Mall kiosk' },
    { src: img8, label: ' ⁠Media Solution' },
    { src: img9, label: 'Product Launching' },
  ];

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setOpen(true);
  };

  return (
    <div className='Services' id='services'>
      <div className='container'>
        <h1 className='mainh11'>Services We Provide</h1>
        <div className='row'>
          {images.map((img, index) => (
            <div
              key={index}
              className='col-md-6 col-sm-12 col-lg-4 col-xl-4'
              onClick={() => openLightbox(index)}
              style={{ cursor: 'pointer' }}
            >
              <div className='image-container'>
                <img className='service-img1' src={img.src} alt={img.label} />
                <div className='overlay'></div>
                <div className='overlay-text'>{img.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images.map((img) => ({ src: img.src }))}
          index={photoIndex}
          onClose={() => setOpen(false)}
          styles={{
            container: {
              backgroundColor: 'rgba(0, 0, 0, 1)',
              padding: '0',
              margin: '0',
              height: '100vh',
              width: '100vw',
            },
            slide: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            },
            image: {
              maxHeight: '100%',
              maxWidth: '100%',
              objectFit: 'contain',
            },
          }}
        />
      )}
    </div>
  );
};

export default Services;
    