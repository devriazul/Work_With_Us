import { memo, SVGProps } from 'react';

const FrameIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10.9739 3.01296L9.58001 4.40686L13.2842 8.11104H1.13701V10.0757H13.2842L9.58001 13.7799L10.9739 15.1738L17.0543 9.09337L10.9739 3.01296Z'
      fill='#F37124'
    />
  </svg>
);
const Memo = memo(FrameIcon2);
export { Memo as FrameIcon2 };
