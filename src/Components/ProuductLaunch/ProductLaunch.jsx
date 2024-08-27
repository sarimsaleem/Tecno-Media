import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import p1 from '../assets/p1.jpeg';
import p2 from '../assets/p2.jpeg';
import p3 from '../assets/p3.jpeg';
import p4 from '../assets/p4.jpeg';
import p5 from '../assets/p5.jpeg';
import p6 from '../assets/p6.jpeg';
import './product.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const ProductLaunch = () => {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [p1, p2, p3, p4, p5, p6];

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setOpen(true);
  };

  return (
    <div className='product' id='product'>
      <div className='container'>
        <div className='text-containers'>
          <h1 className='mainh1'>Product Launching</h1>
        </div>
        <h2 className='text-heading'>
          Hisense Product Launching in PC Hotel Lahore <br /> Islamabad and Karachi
        </h2>
        <Swiper
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className='image-container' onClick={() => openLightbox(index)} style={{ cursor: 'pointer' }}>
                <img src={img} alt={`Product Launch ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='container'>
        <Swiper
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className='image-container' onClick={() => openLightbox(index)} style={{ cursor: 'pointer' }}>
                <img src={img} alt={`Product Launch ${index + 1}`} />
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

export default ProductLaunch;
