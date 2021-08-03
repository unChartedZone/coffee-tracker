import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import fallbackImage from '../assets/images/coffee-shop-bg.jpg';

import GhostLoader from './GhostLoader';

const Image = ({ src, alt, height, offset }) => {
  const refPlaceholder = useRef();

  const removePlaceholder = () => {
    refPlaceholder.current.remove();
  };

  return (
    <>
      <GhostLoader ref={refPlaceholder} />
      <LazyLoad height={height} offset={offset} once>
        <img
          src={src}
          alt={alt}
          onLoad={removePlaceholder}
          onError={(el) => (el.currentTarget.src = fallbackImage)}
        />
      </LazyLoad>
    </>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
