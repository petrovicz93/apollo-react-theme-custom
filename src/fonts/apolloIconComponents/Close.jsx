/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgClose(props) {
  return (
    <svg width={24} height={24} {...props}>
      <path
        d="M14.3 12.179a.25.25 0 010-.354l9.263-9.262A1.5 1.5 0 1021.439.442L12.177 9.7a.25.25 0 01-.354 0L2.561.442A1.5 1.5 0 10.439 2.563L9.7 11.825a.25.25 0 010 .354L.439 21.442a1.5 1.5 0 002.122 2.121l9.262-9.263a.25.25 0 01.354 0l9.262 9.263a1.5 1.5 0 102.122-2.121L14.3 12.179z"
        fill={props.color}
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgClose;
