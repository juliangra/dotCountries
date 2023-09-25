import { useColorMode } from '@chakra-ui/react'

const Logo = () => {
  const { colorMode } = useColorMode()

  const color = colorMode === 'light' ? '#1a202c' : '#FFF'

  return (
    <>
      <svg
        width="163"
        height="32"
        viewBox="0 0 163 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M38.2273 23.1776C37.3987 23.1776 36.6482 22.9645 35.9759 22.5384C35.3082 22.1075 34.7779 21.4754 34.3849 20.642C33.9967 19.804 33.8026 18.7765 33.8026 17.5597C33.8026 16.3097 34.0038 15.2704 34.4062 14.4418C34.8087 13.6084 35.3438 12.9858 36.0114 12.5739C36.6837 12.1572 37.42 11.9489 38.2202 11.9489C38.831 11.9489 39.34 12.053 39.7472 12.2614C40.1591 12.465 40.4905 12.7206 40.7415 13.0284C40.9972 13.3314 41.1913 13.6297 41.3239 13.9233H41.4162V8.45455H44.4347V23H41.4517V21.2528H41.3239C41.1818 21.5559 40.9806 21.8565 40.7202 22.1548C40.4645 22.4484 40.1307 22.6922 39.7188 22.8864C39.3116 23.0805 38.8144 23.1776 38.2273 23.1776ZM39.1861 20.7699C39.6738 20.7699 40.0857 20.6373 40.4219 20.3722C40.7628 20.1023 41.0232 19.7259 41.2031 19.2429C41.3878 18.7599 41.4801 18.1941 41.4801 17.5455C41.4801 16.8968 41.3902 16.3333 41.2102 15.8551C41.0303 15.3769 40.7699 15.0076 40.429 14.7472C40.0881 14.4867 39.6738 14.3565 39.1861 14.3565C38.6889 14.3565 38.2699 14.4915 37.929 14.7614C37.5881 15.0312 37.33 15.4053 37.1548 15.8835C36.9796 16.3617 36.892 16.9157 36.892 17.5455C36.892 18.1799 36.9796 18.741 37.1548 19.2287C37.3348 19.7116 37.5928 20.0904 37.929 20.3651C38.2699 20.6349 38.6889 20.7699 39.1861 20.7699ZM51.6512 23.2131C50.548 23.2131 49.5939 22.9787 48.789 22.5099C47.9888 22.0365 47.3709 21.3783 46.9353 20.5355C46.4997 19.688 46.2819 18.7055 46.2819 17.5881C46.2819 16.4612 46.4997 15.4763 46.9353 14.6335C47.3709 13.786 47.9888 13.1278 48.789 12.6591C49.5939 12.1856 50.548 11.9489 51.6512 11.9489C52.7544 11.9489 53.7061 12.1856 54.5063 12.6591C55.3112 13.1278 55.9315 13.786 56.3671 14.6335C56.8027 15.4763 57.0205 16.4612 57.0205 17.5881C57.0205 18.7055 56.8027 19.688 56.3671 20.5355C55.9315 21.3783 55.3112 22.0365 54.5063 22.5099C53.7061 22.9787 52.7544 23.2131 51.6512 23.2131ZM51.6654 20.8693C52.1673 20.8693 52.5863 20.7273 52.9225 20.4432C53.2587 20.1544 53.512 19.7614 53.6825 19.2642C53.8576 18.767 53.9452 18.2012 53.9452 17.5668C53.9452 16.9323 53.8576 16.3665 53.6825 15.8693C53.512 15.3722 53.2587 14.9792 52.9225 14.6903C52.5863 14.4015 52.1673 14.2571 51.6654 14.2571C51.1588 14.2571 50.7326 14.4015 50.387 14.6903C50.0461 14.9792 49.788 15.3722 49.6129 15.8693C49.4424 16.3665 49.3572 16.9323 49.3572 17.5668C49.3572 18.2012 49.4424 18.767 49.6129 19.2642C49.788 19.7614 50.0461 20.1544 50.387 20.4432C50.7326 20.7273 51.1588 20.8693 51.6654 20.8693ZM64.5904 12.0909V14.3636H58.0208V12.0909H64.5904ZM59.5123 9.47727H62.5379V19.6477C62.5379 19.9271 62.5805 20.1449 62.6657 20.3011C62.7509 20.4527 62.8693 20.5592 63.0208 20.6207C63.1771 20.6823 63.357 20.7131 63.5606 20.7131C63.7026 20.7131 63.8447 20.7012 63.9867 20.6776C64.1288 20.6491 64.2377 20.6278 64.3134 20.6136L64.7893 22.8651C64.6378 22.9124 64.4247 22.9669 64.1501 23.0284C63.8755 23.0947 63.5416 23.1349 63.1487 23.1491C62.4195 23.1776 61.7803 23.0805 61.231 22.858C60.6865 22.6354 60.2628 22.2898 59.9597 21.821C59.6567 21.3523 59.5076 20.7604 59.5123 20.0455V9.47727ZM79.2519 13.5469H76.1411C76.0843 13.1444 75.9683 12.7869 75.7931 12.4744C75.6179 12.1572 75.393 11.8873 75.1184 11.6648C74.8438 11.4422 74.5265 11.2718 74.1667 11.1534C73.8116 11.035 73.4257 10.9759 73.009 10.9759C72.2562 10.9759 71.6004 11.1629 71.0417 11.5369C70.483 11.9062 70.0497 12.446 69.742 13.1562C69.4342 13.8617 69.2803 14.7187 69.2803 15.7273C69.2803 16.7642 69.4342 17.6354 69.742 18.3409C70.0545 19.0464 70.4901 19.5791 71.0488 19.9389C71.6075 20.2988 72.2538 20.4787 72.9877 20.4787C73.3996 20.4787 73.7808 20.4242 74.1312 20.3153C74.4863 20.2064 74.8012 20.0478 75.0758 19.8395C75.3504 19.6264 75.5777 19.3684 75.7576 19.0653C75.9423 18.7623 76.0701 18.4167 76.1411 18.0284L79.2519 18.0426C79.1714 18.7102 78.9702 19.3542 78.6482 19.9744C78.331 20.59 77.9025 21.1416 77.3627 21.6293C76.8277 22.1122 76.1885 22.4957 75.4451 22.7798C74.7065 23.0592 73.8708 23.1989 72.938 23.1989C71.6407 23.1989 70.4806 22.9053 69.4579 22.3182C68.4399 21.7311 67.635 20.8812 67.0431 19.7685C66.456 18.6558 66.1624 17.3087 66.1624 15.7273C66.1624 14.1411 66.4607 12.7917 67.0573 11.679C67.6539 10.5663 68.4636 9.71875 69.4863 9.13636C70.509 8.54924 71.6596 8.25568 72.938 8.25568C73.7808 8.25568 74.5621 8.37405 75.2817 8.6108C76.0062 8.84754 76.6478 9.19318 77.2065 9.64773C77.7652 10.0975 78.2197 10.6491 78.5701 11.3026C78.9252 11.956 79.1525 12.7041 79.2519 13.5469ZM86.1293 23.2131C85.0261 23.2131 84.072 22.9787 83.2671 22.5099C82.4669 22.0365 81.849 21.3783 81.4134 20.5355C80.9778 19.688 80.76 18.7055 80.76 17.5881C80.76 16.4612 80.9778 15.4763 81.4134 14.6335C81.849 13.786 82.4669 13.1278 83.2671 12.6591C84.072 12.1856 85.0261 11.9489 86.1293 11.9489C87.2326 11.9489 88.1843 12.1856 88.9844 12.6591C89.7894 13.1278 90.4096 13.786 90.8452 14.6335C91.2808 15.4763 91.4987 16.4612 91.4987 17.5881C91.4987 18.7055 91.2808 19.688 90.8452 20.5355C90.4096 21.3783 89.7894 22.0365 88.9844 22.5099C88.1843 22.9787 87.2326 23.2131 86.1293 23.2131ZM86.1435 20.8693C86.6454 20.8693 87.0645 20.7273 87.4006 20.4432C87.7368 20.1544 87.9901 19.7614 88.1606 19.2642C88.3358 18.767 88.4234 18.2012 88.4234 17.5668C88.4234 16.9323 88.3358 16.3665 88.1606 15.8693C87.9901 15.3722 87.7368 14.9792 87.4006 14.6903C87.0645 14.4015 86.6454 14.2571 86.1435 14.2571C85.6369 14.2571 85.2108 14.4015 84.8651 14.6903C84.5242 14.9792 84.2662 15.3722 84.091 15.8693C83.9205 16.3665 83.8353 16.9323 83.8353 17.5668C83.8353 18.2012 83.9205 18.767 84.091 19.2642C84.2662 19.7614 84.5242 20.1544 84.8651 20.4432C85.2108 20.7273 85.6369 20.8693 86.1435 20.8693ZM100.262 18.3551V12.0909H103.287V23H100.382V21.0185H100.269C100.023 21.6577 99.613 22.1714 99.0401 22.5597C98.4719 22.9479 97.7783 23.142 96.9592 23.142C96.23 23.142 95.5884 22.9763 95.0344 22.6449C94.4805 22.3134 94.0472 21.8423 93.7347 21.2315C93.427 20.6207 93.2707 19.8892 93.266 19.0369V12.0909H96.2915V18.4972C96.2963 19.1411 96.4691 19.6501 96.81 20.0241C97.1509 20.3982 97.6078 20.5852 98.1808 20.5852C98.5453 20.5852 98.8862 20.5024 99.2035 20.3366C99.5207 20.1662 99.7764 19.9152 99.9705 19.5838C100.169 19.2524 100.266 18.8428 100.262 18.3551ZM108.533 16.6932V23H105.507V12.0909H108.391V14.0156H108.519C108.76 13.3812 109.165 12.8793 109.733 12.5099C110.301 12.1359 110.99 11.9489 111.8 11.9489C112.558 11.9489 113.218 12.1146 113.782 12.446C114.345 12.7775 114.783 13.2509 115.095 13.8665C115.408 14.4773 115.564 15.2064 115.564 16.054V23H112.539V16.5938C112.543 15.9261 112.373 15.4053 112.027 15.0312C111.682 14.6525 111.206 14.4631 110.6 14.4631C110.193 14.4631 109.833 14.5507 109.52 14.7259C109.212 14.901 108.971 15.1567 108.796 15.4929C108.625 15.8243 108.538 16.2244 108.533 16.6932ZM123.551 12.0909V14.3636H116.982V12.0909H123.551ZM118.473 9.47727H121.499V19.6477C121.499 19.9271 121.541 20.1449 121.627 20.3011C121.712 20.4527 121.83 20.5592 121.982 20.6207C122.138 20.6823 122.318 20.7131 122.522 20.7131C122.664 20.7131 122.806 20.7012 122.948 20.6776C123.09 20.6491 123.199 20.6278 123.274 20.6136L123.75 22.8651C123.599 22.9124 123.386 22.9669 123.111 23.0284C122.836 23.0947 122.503 23.1349 122.11 23.1491C121.38 23.1776 120.741 23.0805 120.192 22.858C119.647 22.6354 119.224 22.2898 118.921 21.821C118.618 21.3523 118.468 20.7604 118.473 20.0455V9.47727ZM125.322 23V12.0909H128.255V13.9943H128.369C128.568 13.3172 128.902 12.8059 129.371 12.4602C129.839 12.1098 130.379 11.9347 130.99 11.9347C131.141 11.9347 131.305 11.9441 131.48 11.9631C131.655 11.982 131.809 12.008 131.942 12.0412V14.7259C131.8 14.6832 131.603 14.6454 131.352 14.6122C131.101 14.5791 130.871 14.5625 130.663 14.5625C130.218 14.5625 129.82 14.6596 129.47 14.8537C129.124 15.0431 128.85 15.3082 128.646 15.6491C128.447 15.9901 128.348 16.383 128.348 16.8281V23H125.322ZM133.306 23V12.0909H136.331V23H133.306ZM134.826 10.6847C134.376 10.6847 133.99 10.5355 133.668 10.2372C133.351 9.93419 133.192 9.57197 133.192 9.15057C133.192 8.7339 133.351 8.37642 133.668 8.07812C133.99 7.77509 134.376 7.62358 134.826 7.62358C135.276 7.62358 135.659 7.77509 135.976 8.07812C136.298 8.37642 136.459 8.7339 136.459 9.15057C136.459 9.57197 136.298 9.93419 135.976 10.2372C135.659 10.5355 135.276 10.6847 134.826 10.6847ZM143.527 23.2131C142.404 23.2131 141.439 22.9858 140.629 22.5312C139.824 22.072 139.204 21.4233 138.768 20.5852C138.333 19.7424 138.115 18.7457 138.115 17.5952C138.115 16.473 138.333 15.4882 138.768 14.6406C139.204 13.7931 139.817 13.1326 140.608 12.6591C141.403 12.1856 142.336 11.9489 143.406 11.9489C144.126 11.9489 144.796 12.0649 145.416 12.2969C146.041 12.5241 146.585 12.8674 147.049 13.3267C147.518 13.786 147.883 14.3636 148.143 15.0597C148.404 15.7509 148.534 16.5606 148.534 17.4886V18.3196H139.322V16.4446H145.686C145.686 16.009 145.591 15.6231 145.402 15.2869C145.212 14.9508 144.949 14.688 144.613 14.4986C144.282 14.3045 143.896 14.2074 143.456 14.2074C142.996 14.2074 142.589 14.3139 142.234 14.527C141.884 14.7353 141.609 15.017 141.41 15.3722C141.211 15.7225 141.109 16.1132 141.105 16.544V18.3267C141.105 18.8665 141.204 19.3329 141.403 19.7259C141.607 20.1188 141.893 20.4219 142.262 20.6349C142.632 20.848 143.07 20.9545 143.576 20.9545C143.913 20.9545 144.22 20.9072 144.5 20.8125C144.779 20.7178 145.018 20.5758 145.217 20.3864C145.416 20.197 145.567 19.965 145.672 19.6903L148.47 19.875C148.328 20.5473 148.037 21.1345 147.596 21.6364C147.161 22.1335 146.597 22.5218 145.906 22.8011C145.219 23.0758 144.426 23.2131 143.527 23.2131ZM159.385 15.2017L156.615 15.3722C156.568 15.1354 156.466 14.9223 156.31 14.733C156.153 14.5388 155.947 14.3849 155.692 14.2713C155.441 14.1529 155.14 14.0938 154.79 14.0938C154.321 14.0938 153.926 14.1932 153.604 14.392C153.282 14.5862 153.121 14.8466 153.121 15.1733C153.121 15.4337 153.225 15.6539 153.433 15.8338C153.642 16.0137 153.999 16.1581 154.506 16.267L156.48 16.6648C157.541 16.8826 158.331 17.233 158.852 17.7159C159.373 18.1989 159.633 18.8333 159.633 19.6193C159.633 20.3343 159.423 20.9616 159.001 21.5014C158.585 22.0412 158.012 22.4626 157.283 22.7656C156.558 23.0639 155.722 23.2131 154.776 23.2131C153.331 23.2131 152.181 22.9124 151.324 22.3111C150.472 21.705 149.972 20.8812 149.825 19.8395L152.801 19.6832C152.891 20.1236 153.109 20.4598 153.454 20.6918C153.8 20.919 154.243 21.0327 154.783 21.0327C155.313 21.0327 155.739 20.9309 156.061 20.7273C156.388 20.5189 156.553 20.2514 156.558 19.9247C156.553 19.6501 156.437 19.4252 156.21 19.25C155.983 19.0701 155.633 18.9328 155.159 18.8381L153.27 18.4616C152.204 18.2486 151.411 17.8793 150.891 17.3537C150.374 16.8281 150.116 16.1581 150.116 15.3438C150.116 14.643 150.306 14.0393 150.685 13.5327C151.068 13.026 151.606 12.6354 152.297 12.3608C152.993 12.0862 153.807 11.9489 154.74 11.9489C156.118 11.9489 157.202 12.2401 157.993 12.8224C158.788 13.4048 159.252 14.1979 159.385 15.2017Z"
          fill={color}
        />
        <path
          d="M23.5011 9.73379C27.3168 14.1853 26.9655 20.8484 22.703 24.8741C18.468 28.8738 11.8478 28.8738 7.61279 24.8741C3.35029 20.8484 2.99904 14.1853 6.81465 9.73379C11.2002 4.61732 19.1156 4.61732 23.5011 9.73379Z"
          stroke={color}
          strokeWidth="2"
        />
        <path
          d="M24 10L19.7768 11.3054C16.789 12.2289 15.9456 16.0555 18.2683 18.1495V18.1495C19.1161 18.9137 19.6 20.0016 19.6 21.143V27"
          stroke={color}
          strokeWidth="1.5"
        />
        <path
          d="M4.08026 12.6516L10.2028 14.497C11.3233 14.8348 12.5244 14.3184 13.0501 13.2729V13.2729C13.5655 12.248 13.2866 11.0018 12.3835 10.2943L8.5829 7.31721"
          stroke={color}
          strokeWidth="1.5"
        />
        <path
          d="M5 19.9L5.76602 19.7926C9.14716 19.3183 12.4567 21.0422 14.006 24.0846L16 28"
          stroke={color}
          strokeWidth="1.5"
        />
      </svg>
    </>
  )
}

export default Logo