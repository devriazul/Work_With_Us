import { memo, SVGProps } from 'react';

const FrameIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M7.21735 3.01296L8.61125 4.40686L4.90707 8.11104H17.0543V10.0757H4.90707L8.61125 13.7799L7.21735 15.1738L1.13694 9.09337L7.21735 3.01296Z'
      fill='#F37124'
    />
  </svg>
);
const Memo = memo(FrameIcon);
export { Memo as FrameIcon };
