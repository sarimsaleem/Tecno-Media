import React, { useEffect, useState } from 'react';
import './fab.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import importImagesFromFolder from '../../utils/importImages';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const Fabrication = () => {
  const [images, setImages] = useState([]);
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    (async () => {
      await importImagesFromFolder('fabrication').then((importedImages) => {
        setImages(Object.values(importedImages));
      });
    })();
  }, []);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setOpen(true);
  };

  return (
    <div className='fabrication' id='fabrication'>
      <div className='container'>
        <div className='text-containers'>
          <h1 className='mainh1'>Stall Fabrication</h1>
        </div>
        <h2 className='text-heading'>IGATEX Expo Center Lahore</h2>
        <Swiper
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {images.slice(0, 6).map((img, index) => (
            <SwiperSlide key={index}>
              <div className='image-container'>
                <img
                  src={img}
                  alt={`Fabrication ${index + 1}`}
                  onClick={() => openLightbox(index)}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className='container'>
        <h2 className='text-heading'>
          ATC Oil and Gas Show Serena Hotel Islamabad
        </h2>
        <Swiper
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {images.slice(6, 12).map((img, index) => (
            <SwiperSlide key={index}>
              <div className='image-container'>
                <img
                  src={img}
                  alt={`Fabrication ${index + 7}`}
                  onClick={() => openLightbox(index + 6)}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images.map((img) => ({ src: img }))}
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

export default Fabrication;
