import React, { SVGProps } from 'react';
export const NoteList = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='14' viewBox='0 0 16 14' fill='none' {...props}>
      <path
        d='M0.921634 9.71718L7.83661 6.80561C7.94109 6.76162 8.05891 6.76162 8.16339 6.80561L15.0784 9.71718C15.4219 9.86183 15.4219 10.3486 15.0784 10.4933L8.16339 13.4049C8.05891 13.4489 7.94109 13.4489 7.83661 13.4049L0.921635 10.4933C0.578088 10.3486 0.578087 9.86183 0.921634 9.71718Z'
        fill='white'
        fillOpacity='0.8'
      />
      <path
        d='M0.921634 6.34877L7.83661 3.43721C7.94109 3.39321 8.05891 3.39321 8.16339 3.4372L15.0784 6.34877C15.4219 6.49342 15.4219 6.98023 15.0784 7.12489L8.16339 10.0365C8.05891 10.0804 7.94109 10.0804 7.83661 10.0365L0.921635 7.12489C0.578088 6.98024 0.578087 6.49342 0.921634 6.34877Z'
        fill='#93C5FD'
      />
      <path
        d='M0.921634 2.98036L7.83661 0.0687968C7.94109 0.0248026 8.05891 0.0248025 8.16339 0.0687967L15.0784 2.98036C15.4219 3.12502 15.4219 3.61183 15.0784 3.75648L8.16339 6.66805C8.05891 6.71204 7.94109 6.71204 7.83661 6.66805L0.921635 3.75648C0.578088 3.61183 0.578087 3.12502 0.921634 2.98036Z'
        fill='#3CB643'
      />
    </svg>
  );
};
