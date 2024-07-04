import React, { SVGProps } from 'react';

export const Hamburger = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='14' height='10' viewBox='0 0 14 10' fill='none' {...props}>
    <path d='M1 1H13' stroke='#94A3B8' stroke-width='1.8' stroke-linecap='round' />
    <path d='M1 5H13' stroke='#94A3B8' stroke-width='1.8' stroke-linecap='round' />
    <path d='M1 9H13' stroke='#94A3B8' stroke-width='1.8' stroke-linecap='round' />
  </svg>
);
