import React, { useEffect, useState } from 'react';
import './fab.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import importImagesFromFolder from '../../utils/importImages';

const Fabrication = () => {
  const [images, setImages] = useState([]);



  useEffect(() => {
    (async () => {
     await importImagesFromFolder("fabrication").then((importedImages) => {
        console.log('importedImages',importedImages)
        setImages(Object.values(importedImages));
      });
    })()
  }, []);
  // useEffect(() => {
  //   const loadImages = async () => {
  //     const importedImages = [];
  //     for (let i = 1; i <= 65; i++) {
  //       const image = await import(`../mainAssets/${i}.jpg`);
  //       importedImages.push(image.default);
  //     }
  //     console.log('importedImages',importedImages)
  //     setImages(importedImages);
  //   };

  //   loadImages();
  // }, []);
console.log('images',images)
  return (
    <div className='fabrication' id='fabrication'>
      <div className='container'>
        <div className="text-containers">
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
              <div className="image-container">
                <img src={img} alt={`Fabrication ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className='container'>
        <h2 className='text-heading'>ATC Oil and Gas Show Serena Hotel Islamabad</h2>
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
              <div className="image-container">
                <img src={img} alt={`Fabrication ${index + 7}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Fabrication;
