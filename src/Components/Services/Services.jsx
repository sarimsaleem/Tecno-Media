import React, { useState } from 'react';
import './services.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/44.jpg';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const Services = () => {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [
    { src: img1, label: 'Fabrication' },
    { src: img2, label: 'Printing' },
    { src: img3, label: 'Media Solutions' },
    { src: img4, label: 'Ambiance' },
    { src: img1, label: 'Event Management' },
    { src: img2, label: 'Furniture' },
    { src: img3, label: 'Product Launching' },
    { src: img4, label: 'Conference Event' },
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
              className='col-md-6 col-sm-12 col-lg-4 col-xl-3'
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
    