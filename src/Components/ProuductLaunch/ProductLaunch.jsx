import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import launch1 from './../../newAssets/launch1.jpg';
import launch2 from './../../newAssets/launch2.jpg';
import launch3 from './../../newAssets/launch3.jpg';
import launch4 from './../../newAssets/launch4.jpg';

import './product.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const ProductLaunch = () => {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [launch1, launch2, launch3, launch4];

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setOpen(true);
  };

  return (
    <div className="product" id="product">
      <div className="container">
        <div className="text-containers">
          <h1 className="mainh1">Product Launching</h1>
        </div>
        <Swiper
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 1500, 
            disableOnInteraction: false, 
          }}
          modules={[Autoplay]} 
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className="image-container"
                onClick={() => openLightbox(index)}
                style={{ cursor: 'pointer' }}
              >
                <img src={img} alt={`Product Launch ${index + 1}`} className="product-img" />
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
