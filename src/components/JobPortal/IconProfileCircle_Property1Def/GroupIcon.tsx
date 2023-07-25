import { memo, SVGProps } from 'react';

const GroupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M15.1679 17.1348C15.14 17.1348 15.0981 17.1348 15.0702 17.1348C15.0283 17.1348 14.9725 17.1348 14.9307 17.1348C11.7632 17.0372 9.39111 14.5674 9.39111 11.5255C9.39111 8.42788 11.9167 5.90231 15.0144 5.90231C18.112 5.90231 20.6376 8.42788 20.6376 11.5255C20.6237 14.5814 18.2376 17.0372 15.2097 17.1348C15.1818 17.1348 15.1818 17.1348 15.1679 17.1348ZM15.0004 7.98137C13.047 7.98137 11.4702 9.57206 11.4702 11.5116C11.4702 13.4232 12.9632 14.9721 14.8609 15.0418C14.9028 15.0279 15.0423 15.0279 15.1818 15.0418C17.0516 14.9442 18.5167 13.4093 18.5306 11.5116C18.5306 9.57206 16.9539 7.98137 15.0004 7.98137Z'
      fill='#273B92'
    />
    <path
      d='M15.0011 30C11.2476 30 7.66158 28.6047 4.88484 26.0651C4.63368 25.8419 4.52206 25.507 4.54996 25.1861C4.73136 23.5256 5.76391 21.9768 7.48018 20.8326C11.6383 18.0698 18.3778 18.0698 22.522 20.8326C24.2382 21.9907 25.2708 23.5256 25.4522 25.1861C25.494 25.521 25.3685 25.8419 25.1173 26.0651C22.3406 28.6047 18.7545 30 15.0011 30ZM6.74065 24.907C9.05692 26.8465 11.9732 27.907 15.0011 27.907C18.029 27.907 20.9452 26.8465 23.2615 24.907C23.0103 24.0559 22.3406 23.2326 21.3499 22.5628C17.9173 20.2745 12.0988 20.2745 8.63832 22.5628C7.64762 23.2326 6.99181 24.0559 6.74065 24.907Z'
      fill='#273B92'
    />
    <path
      d='M14.9999 29.9999C6.72555 29.9999 0 23.2743 0 14.9999C0 6.72555 6.72555 0 14.9999 0C23.2743 0 29.9999 6.72555 29.9999 14.9999C29.9999 23.2743 23.2743 29.9999 14.9999 29.9999ZM14.9999 2.09301C7.88369 2.09301 2.09301 7.88369 2.09301 14.9999C2.09301 22.1162 7.88369 27.9068 14.9999 27.9068C22.1162 27.9068 27.9068 22.1162 27.9068 14.9999C27.9068 7.88369 22.1162 2.09301 14.9999 2.09301Z'
      fill='#273B92'
    />
  </svg>
);
const Memo = memo(GroupIcon);
export { Memo as GroupIcon };
