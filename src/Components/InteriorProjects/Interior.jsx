import React, { useState } from 'react';
import int1 from '../../newAssets/projects1.jpg'
import int2 from '../../newAssets/projects2.jpg'
import int3 from '../../newAssets/projects3.jpg'
import int4 from '../../newAssets/projects4.jpg'
import int5 from '../../newAssets/projects5.jpg'
import int6 from '../../newAssets/projects6.jpg'

import './interior.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const Interior = () => {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [int1, int2, int4, int5, int6];

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setOpen(true);
  };

  return (
    <div className='interior' id='interior'>
      <div className='container'>
        <div className='text-containers'>
          <h1 className='mainh1'>Interior Project</h1>
        </div>
        <h2 className='text-heading'>
          Advance LABs and collection centers all over Pakistan
        </h2>
        <div className='row'>
          <div className='col-md-8'>
            <div
              className='image-contain'
              onClick={() => openLightbox(1)}
              style={{ cursor: 'pointer' }}
            >
              <img src={int2} className='interiorImg' alt='Interior 1' />
            </div>
          </div>
          <div className='col-md-4'>
            <div
              className='image-contain'
              onClick={() => openLightbox(0)}
              style={{ cursor: 'pointer' }}
            >
              <img src={int1} className='interiorImg' alt='Interior 2' />
            </div>
          </div>
        </div>
        <h2 className='text-heading'>Office Interior in Dubai</h2>
        <div className='row'>
          <div className='col-md-4'>
            <div
              className='image-contain'
              onClick={() => openLightbox(4)}
              style={{ cursor: 'pointer' }}
            >
              <img src={int6} className='interiorImg' alt='Interior 3' />
            </div>
          </div>
          <div className='col-md-4'>
            <div
              className='image-contain'
              onClick={() => openLightbox(2)}
              style={{ cursor: 'pointer' }}
            >
              <img src={int4} className='interiorImg' alt='Interior 4' />
            </div>
          </div>
          <div className='col-md-4'>
            <div
              className='image-contain'
              onClick={() => openLightbox(3)}
              style={{ cursor: 'pointer' }}
            >
              <img src={int5} className='interiorImg' alt='Interior 5' />
            </div>
          </div>
        </div>
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

export default Interior;
