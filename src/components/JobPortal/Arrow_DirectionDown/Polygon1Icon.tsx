import { memo, SVGProps } from 'react';

const Polygon1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 11 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5.57411 5.56356C5.37473 5.79379 5.01757 5.79379 4.81819 5.56356L0.716486 0.827325C0.436048 0.503503 0.666075 -8.50294e-07 1.09445 -8.12844e-07L9.29785 -9.56799e-08C9.72623 -5.823e-08 9.95625 0.503505 9.67582 0.827327L5.57411 5.56356Z'
      fill='#0A0A0A'
    />
  </svg>
);
const Memo = memo(Polygon1Icon);
export { Memo as Polygon1Icon };
