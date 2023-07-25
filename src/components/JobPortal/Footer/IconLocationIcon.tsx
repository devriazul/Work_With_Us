import { memo, SVGProps } from 'react';

const IconLocationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6.15295 23.059C7.51333 24.3491 9.26073 25 10.9964 25C12.732 25 14.4794 24.3491 15.8398 23.059C19.2994 19.7582 23.1225 14.5049 21.6918 8.24035C20.39 2.54533 15.3824 0 11.0081 0H10.9964C6.62205 0 1.61444 2.54533 0.312701 8.22873C-1.12977 14.4933 2.69336 19.7582 6.15295 23.059Z'
      fill='#F37124'
    />
    <path
      d='M11 15C8.79844 15 7 12.9858 7 10.4942C7 8.0026 8.79844 6 11 6C13.2016 6 15 8.01424 15 10.5058C15 12.9974 13.2016 15 11 15Z'
      fill='#E9EBF2'
    />
  </svg>
);
const Memo = memo(IconLocationIcon);
export { Memo as IconLocationIcon };
