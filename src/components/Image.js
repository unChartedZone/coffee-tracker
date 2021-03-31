import React, { useRef } from 'react';
import LazyLoad from 'react-lazyload';
import fallbackImage from '../assets/images/coffee-shop-bg.jpg';

import GhostLoader from './GhostLoader';

const Image = ({ src, alt, height }) => {
  const refPlaceholder = useRef();

  const removePlaceholder = () => {
    refPlaceholder.current.remove();
  };

  return (
    <>
      <GhostLoader ref={refPlaceholder} />
      <LazyLoad height={height} once>
        <img
          src={src}
          alt={alt}
          onLoad={removePlaceholder}
          error={(el) => (el.currentTarget.src = fallbackImage)}
        />
      </LazyLoad>
    </>
  );
};

export default Image;
