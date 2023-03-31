/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgUpload(props) {
  return (
    <svg width={24} height={24} {...props}>
      <g fill={props.color} fillRule="nonzero">
        <path d="M0 19.59a4.039 4.039 0 004.035 4.035h15.93A4.039 4.039 0 0024 19.59v-1.874a1.225 1.225 0 10-2.449 0v1.874a1.588 1.588 0 01-1.586 1.586H4.035a1.588 1.588 0 01-1.586-1.586v-1.874a1.225 1.225 0 10-2.449 0v1.874z" />
        <path d="M12 19.322a1.959 1.959 0 001.959-1.959V8.2a.25.25 0 01.25-.25H16.9a.979.979 0 00.739-1.622L12.739.7a1.011 1.011 0 00-1.478 0l-4.9 5.633A.979.979 0 007.1 7.951h2.691a.25.25 0 01.25.25v9.162c0 1.082.877 1.959 1.959 1.959z" />
      </g>
    </svg>
  );
}

export default SvgUpload;
