/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgPencil(props) {
  return (
    <svg width={24} height={24} {...props}>
      <g fill={props.color} fillRule="nonzero">
        <path d="M2.649 16.4a.5.5 0 00-.841.245L.394 23.01a.5.5 0 00.596.597l6.364-1.414a.5.5 0 00.245-.842L2.649 16.4zM17.852 7.208l-10.96 10.96a.252.252 0 000 .354L8.66 20.29c.197.191.51.191.707 0L19.974 9.683a.5.5 0 000-.707l-1.768-1.768a.252.252 0 00-.354 0zM16.792 5.794l-1.768-1.767a.5.5 0 00-.707 0L3.71 14.633a.5.5 0 000 .707l1.768 1.768a.252.252 0 00.354 0l10.96-10.96a.252.252 0 000-.354zM22.449 1.552a4.005 4.005 0 00-5.658 0l-.707.707a.5.5 0 000 .707l4.95 4.949a.513.513 0 00.707 0l.708-.707a4 4 0 000-5.656z" />
      </g>
    </svg>
  );
}

export default SvgPencil;
