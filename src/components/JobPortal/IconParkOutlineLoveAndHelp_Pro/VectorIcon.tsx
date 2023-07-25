import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 26 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M7.375 0.375C3.57813 0.375 0.5 3.45312 0.5 7.25C0.5 14.125 8.625 20.375 13 21.8288C17.375 20.375 25.5 14.125 25.5 7.25C25.5 3.45312 22.4219 0.375 18.625 0.375C16.3 0.375 14.2438 1.52937 13 3.29625C12.3661 2.39325 11.5239 1.65631 10.5447 1.1478C9.56557 0.639302 8.47831 0.37422 7.375 0.375Z'
      stroke='#273B92'
      strokeWidth={2.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
