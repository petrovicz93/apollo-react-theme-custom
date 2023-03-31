/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgCheck(props) {
  return (
    <svg width={24} height={24} {...props}>
      <path
        d="M23.613 4.84L11.674 21.041a1.763 1.763 0 01-2.494.328L.655 14.553a1.745 1.745 0 012.18-2.724l7.109 5.688 10.86-14.74a1.744 1.744 0 112.809 2.063z"
        fill={props.color}
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgCheck;
