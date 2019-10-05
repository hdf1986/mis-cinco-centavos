const Heart = ({ active, onClick }) => (
  <svg
    enableBackground="new -0.709 -11.555 141.732 141.732"
    height="32px"
    version="1.1"
    viewBox="-0.709 -11.555 141.732 141.732"
    width="32px"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    onClick={onClick}
  >
    <g>
      <path
        d="M140.314,37.654C140.314,16.858,123.402,0,102.537,0c-13.744,0-25.77,7.317-32.379,18.255C63.549,7.317,51.521,0,37.777,0   C16.912,0,0,16.858,0,37.654c0,10.821,4.588,20.57,11.922,27.438h-0.01l54.084,51.584c0.992,1.188,2.48,1.945,4.148,1.945   c1.545,0,2.936-0.653,3.92-1.696l54.346-51.833h-0.016C135.729,58.225,140.314,48.476,140.314,37.654"
        fill="orangered"
        opacity={active ? 1 : 0.5}
      />
    </g>
    <g />
  </svg>
);

export default Heart;
