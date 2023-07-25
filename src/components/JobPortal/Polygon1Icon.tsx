import { memo, SVGProps } from 'react';

const Polygon1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 9 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5.03325 4.43856C4.83386 4.6688 4.47671 4.66879 4.27732 4.43856L1.25815 0.952326C0.977714 0.628504 1.20774 0.124999 1.63612 0.124999L7.67446 0.125C8.10283 0.125 8.33286 0.628505 8.05242 0.952327L5.03325 4.43856Z'
      fill='#7180A8'
    />
  </svg>
);
const Memo = memo(Polygon1Icon);
export { Memo as Polygon1Icon };
