/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import LazyLoad from 'react-lazyload';

function LazyImage(props) {
  return (
    <LazyLoad height={200} offset={100} once>
      <img src={props.src} alt={props.alt} />
    </LazyLoad>
  );
}

export default LazyImage;
