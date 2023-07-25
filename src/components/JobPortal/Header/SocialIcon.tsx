import { memo, SVGProps } from 'react';

const SocialIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 132 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6.19449 12.4044C6.19449 13.3911 6.19449 14.3778 6.19397 15.3646C6.19397 15.4555 6.19397 15.5469 6.17998 15.6362C6.14163 15.8907 6.0354 15.9945 5.78148 15.9961C4.91349 16.0013 4.0455 16.0013 3.17751 15.9961C2.93136 15.9951 2.82358 15.8902 2.79404 15.6481C2.77901 15.5261 2.77228 15.4025 2.77228 15.2794C2.77124 13.3059 2.77124 11.3325 2.77124 9.35897C2.77124 9.16196 2.67036 9.06329 2.46861 9.06294C1.93745 9.06294 1.40629 9.0645 0.875135 9.06242C0.512911 9.06087 0.391652 8.94298 0.390615 8.58567C0.388024 7.80666 0.388024 7.02766 0.390615 6.24865C0.391652 5.88615 0.508247 5.77138 0.869435 5.77034C1.43272 5.76878 1.99653 5.76515 2.55981 5.77242C2.72149 5.7745 2.77383 5.71737 2.77331 5.55845C2.77279 4.93576 2.76399 4.31256 2.79352 3.68987C2.87851 1.89037 3.88797 0.328717 6.06287 0.0596996C6.89925 -0.0436487 7.74495 0.0171139 8.58651 0.0238653C8.89796 0.0264619 9.00108 0.15318 9.00211 0.462187C9.00471 1.20848 9.00471 1.95528 9.00211 2.70157C9.00108 3.01889 8.88552 3.13626 8.56734 3.14041C8.1077 3.14664 7.64753 3.14509 7.18788 3.14716C7.11689 3.14716 7.04486 3.14716 6.97438 3.1534C6.38882 3.20585 6.20071 3.40683 6.19501 3.99472C6.19034 4.50108 6.19915 5.00743 6.19034 5.51379C6.18723 5.68569 6.24631 5.7371 6.41524 5.73503C7.08891 5.72724 7.76257 5.73035 8.43624 5.73243C8.81504 5.73347 8.92335 5.84097 8.92438 6.21749C8.92594 7.00948 8.92594 7.80147 8.92438 8.59346C8.92387 8.9248 8.85028 9.01049 8.52174 9.03282C7.83616 9.07956 7.14902 9.04269 6.46292 9.05256C6.1976 9.05619 6.19553 9.05567 6.19553 9.32781C6.19553 10.3535 6.19553 11.3792 6.19553 12.4049L6.19449 12.4044Z'
      fill='white'
    />
    <path
      d='M50.0036 2.72563C49.8018 2.93421 49.6551 3.18695 49.4625 3.40478C49.1474 3.76139 48.8134 4.09529 48.4299 4.37537C48.3145 4.45989 48.2761 4.55661 48.2769 4.70044C48.2911 7.72951 47.2185 10.3057 45.0562 12.4016C43.7172 13.6998 42.1014 14.4773 40.2776 14.8222C39.428 14.9828 38.5701 15.0324 37.7109 14.9799C36.4257 14.9008 35.1947 14.5871 34.032 14.0185C33.6781 13.8453 33.3304 13.6607 33.004 13.413C33.897 13.4761 34.7774 13.4159 35.6391 13.18C36.5037 12.9432 37.2974 12.5551 38.024 11.9954C37.9527 11.9432 37.881 11.947 37.8135 11.9378C36.4174 11.7401 35.4586 10.9731 34.9141 9.66942C34.837 9.48396 34.8474 9.47093 35.0521 9.50036C35.469 9.5605 35.8788 9.52433 36.2898 9.4335C35.9922 9.33215 35.6983 9.22786 35.4281 9.0668C34.3168 8.40572 33.7244 7.42 33.6256 6.12771C33.6097 5.91913 33.631 5.90567 33.8211 5.99819C34.225 6.195 34.6507 6.30518 35.1109 6.33882C35.0942 6.26985 35.0375 6.25303 35 6.22149C34.0329 5.40903 33.5751 4.37789 33.6777 3.10326C33.7135 2.65666 33.8374 2.23697 34.04 1.83915C34.1483 1.62594 34.1483 1.62384 34.3072 1.81392C34.905 2.52882 35.5911 3.14448 36.3623 3.66131C37.6246 4.50783 39.0053 5.04233 40.511 5.23998C40.7199 5.26731 40.9279 5.29549 41.1388 5.30684C41.2889 5.31525 41.3198 5.25554 41.2985 5.11802C41.1593 4.22482 41.3294 3.39301 41.8079 2.62933C42.9806 0.757969 45.6023 0.440469 47.1818 1.98003C47.2835 2.07885 47.374 2.0982 47.5061 2.06666C48.1248 1.91821 48.7155 1.69954 49.2749 1.39381C49.3462 1.3547 49.4121 1.29877 49.5004 1.29625C49.5025 1.74075 48.8876 2.57718 48.1102 3.17812C48.4662 3.13943 48.7905 3.06668 49.1082 2.96869C49.41 2.87576 49.7055 2.76263 50.004 2.65876V2.72605L50.0036 2.72563Z'
      fill='white'
    />
    <path
      d='M74.004 14.1534V1.84257C74.081 1.48216 74.2065 1.15009 74.4333 0.854467C74.7897 0.384713 75.2716 0.113389 75.8466 0H88.1574C88.5178 0.0769425 88.8499 0.20248 89.1455 0.429258C89.6153 0.789673 89.8866 1.27158 90 1.84662V14.1574C89.923 14.5138 89.7975 14.8459 89.5788 15.1374C89.2184 15.6153 88.7365 15.8826 88.1574 16H75.8466C75.4862 15.9231 75.1501 15.7935 74.8544 15.5667C74.3847 15.2063 74.1174 14.7284 74.004 14.1534ZM80.4227 9.64617C80.4227 10.6181 80.4227 11.594 80.4227 12.5659C80.4227 12.8697 80.536 12.983 80.8357 12.983C81.2488 12.983 81.6578 12.983 82.0708 12.983C82.4029 12.983 82.4961 12.8899 82.4961 12.5578C82.4961 11.5576 82.4961 10.5573 82.4961 9.56112C82.4961 9.18046 82.5811 8.816 82.7876 8.49203C83.0266 8.11946 83.3789 7.96558 83.8162 8.00203C84.2698 8.04252 84.5654 8.2855 84.7071 8.71476C84.7881 8.96583 84.8246 9.22096 84.8246 9.48418C84.8246 10.5209 84.8246 11.5576 84.8246 12.5902C84.8246 12.8737 84.9137 12.9668 85.1971 12.9668C85.6467 12.9668 86.0921 12.9668 86.5416 12.9668C86.8656 12.9668 86.9587 12.8737 86.9587 12.5497C86.9587 11.3672 86.9587 10.1848 86.9344 9.00633C86.9263 8.66211 86.8858 8.32194 86.8008 7.98583C86.6591 7.40268 86.412 6.87623 85.8694 6.56036C85.0878 6.10681 84.2576 6.12706 83.4275 6.40243C83.0913 6.51177 82.8362 6.74665 82.6256 7.02607C82.6013 7.05442 82.5851 7.11111 82.5325 7.08681C82.4961 7.07062 82.5042 7.02202 82.5042 6.98962C82.5042 6.88028 82.5042 6.77094 82.5042 6.66161C82.5001 6.41863 82.4029 6.32549 82.1559 6.32549C81.7226 6.32549 81.2933 6.32549 80.86 6.32549C80.5198 6.32549 80.4267 6.41863 80.4267 6.76285C80.4267 7.72665 80.4267 8.69046 80.4267 9.65022L80.4227 9.64617ZM79.4346 9.63807C79.4346 8.65806 79.4346 7.68211 79.4346 6.7021C79.4346 6.43078 79.3252 6.32144 79.0579 6.32144C78.6368 6.32144 78.2156 6.32144 77.7945 6.32144C77.4745 6.32144 77.3652 6.43078 77.3652 6.75475C77.3652 8.68641 77.3652 10.6181 77.3652 12.5497C77.3652 12.8616 77.4867 12.9871 77.7985 12.9871C78.2035 12.9871 78.6125 12.9871 79.0174 12.9871C79.3252 12.9871 79.4386 12.8697 79.4386 12.5619C79.4386 11.59 79.4386 10.614 79.4386 9.64212L79.4346 9.63807ZM77.0655 4.36548C77.0655 5.11465 77.6608 5.7059 78.406 5.7059C79.1511 5.7059 79.7464 5.10251 79.7464 4.34928C79.7464 3.6163 79.1268 3.00481 78.3979 3.01291C77.6608 3.02101 77.0655 3.6244 77.0696 4.36548H77.0655Z'
      fill='white'
    />
    <path
      d='M123.22 0.80009C123.701 0.80279 124.903 0.814491 126.181 0.865793L126.635 0.885594C127.921 0.945897 129.206 1.0503 129.844 1.22761C130.695 1.46702 131.363 2.16366 131.589 3.0475C131.949 4.45157 131.994 7.18951 131.999 7.85284L132 7.98965V8.14626C131.994 8.80959 131.949 11.5484 131.589 12.9516C131.36 13.8381 130.691 14.5357 129.844 14.7715C129.206 14.9488 127.921 15.0532 126.635 15.1135L126.181 15.1342C124.903 15.1846 123.701 15.1972 123.22 15.199L123.009 15.1999H122.779C121.762 15.1936 117.508 15.1477 116.155 14.7715C115.305 14.5321 114.636 13.8354 114.41 12.9516C114.05 11.5475 114.005 8.80959 114 8.14626V7.85284C114.005 7.18951 114.05 4.45067 114.41 3.0475C114.639 2.16096 115.308 1.46342 116.156 1.22851C117.508 0.851392 121.763 0.80549 122.78 0.80009H123.22ZM121.199 4.85029V11.1506L126.6 8.00045L121.199 4.85029Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(SocialIcon);
export { Memo as SocialIcon };