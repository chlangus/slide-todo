import React, { SVGProps } from 'react';

export const SideFoldButton = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' {...props}>
    <rect x='0.75' y='0.75' width='22.5' height='22.5' rx='7.25' fill='white' stroke='#94A3B8' strokeWidth='1.5' />
    <path
      d='M10.875 8L7.25 11.625L10.875 15.25'
      stroke='#94A3B8'
      strokeWidth='1.8'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16.0176 8L12.3926 11.625L16.0176 15.25'
      stroke='#94A3B8'
      strokeWidth='1.8'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
