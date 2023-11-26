import React from 'react';
import Img from '@theme-original/MDXComponents/Img';

export default function ImgWrapper(props) {
  return (
    <figure>
      <Img {...props} />
    </figure>
  );
}
