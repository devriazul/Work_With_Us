import { memo, SVGProps } from 'react';

const Vector5Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1962 232' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      opacity={0.9}
      d='M522.598 65.6624C366.097 14.7702 289.523 125.375 263.515 180.045C263.515 180.045 -297 261.14 217 220.592C731 180.045 1973.5 201.5 1961.5 195C1949.5 188.501 1488.05 -28.577 1321 3.49988C1117 42.671 1050.5 215.885 1011.25 180.045C693.152 -110.449 682.649 117.709 522.598 65.6624Z'
      fill='#F37124'
    />
  </svg>
);
const Memo = memo(Vector5Icon);
export { Memo as Vector5Icon };
