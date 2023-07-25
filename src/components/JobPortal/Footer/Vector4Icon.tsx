import { memo, SVGProps } from 'react';

const Vector4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 2082 425' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M350 231.583C206.4 212.953 56.8333 69.4318 0 0V425H2082V164.954C2053 164.307 1951.6 124.589 1862 164.954C1750 215.411 1595.86 142.75 1418.5 197.5C1073.5 304 1031.5 82.1538 756.5 231.583C481.5 381.012 529.5 254.871 350 231.583Z'
      fill='#273B92'
    />
  </svg>
);
const Memo = memo(Vector4Icon);
export { Memo as Vector4Icon };
