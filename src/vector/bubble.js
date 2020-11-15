import React from "react";

const Bubble = props => (
  <svg
    preserveAspectRatio="xMaxYMin meet"
    viewBox="0 0 650.22 449.58"
    {...props}
  >
    <defs>
      <linearGradient
        id="prefix__bubble-top"
        x1={-709.58}
        x2={-709.58}
        y1={-591.8}
        y2={-169.55}
        gradientTransform="translate(982.18 588.86) scale(.98735)"
        gradientUnits="userSpaceOnUse"
        xlinkHref="#prefix__bubble"
      />
      <linearGradient id="prefix__bubble">
        <stop offset={0} stopColor="#6346bd" />
        <stop offset={1} stopColor="#333b8c" />
      </linearGradient>
      <linearGradient
        id="prefix__bubble-bottom"
        x1={-709.58}
        x2={-709.58}
        y1={-591.8}
        y2={-169.55}
        gradientTransform="rotate(-10.033 3189.614 -5737.557) scale(.98735)"
        gradientUnits="userSpaceOnUse"
        xlinkHref="#prefix__bubble"
      />
    </defs>
    <path
      fill="url(#prefix__bubble-top)"
      d="M45.052 101.9c129.25-132 493.57-135.23 590.14 23.611 81.36 148.63-186.75 237.38-347.05 292.27-67.935 23.261-159.5 56.539-207.49 3.132-73.02-90.401-94.915-255.13-35.591-319.01z"
      opacity={0.66}
    />
    <path
      fill="url(#prefix__bubble-bottom)"
      d="M57.975 53.589c150.27-107.46 509.58-47.168 577 126.07 54.22 160.54-225.25 201.21-392.67 227.33-70.948 11.069-166.91 27.886-204.87-33.067-56.153-101.74-49.013-267.76 20.533-320.33z"
    />
  </svg>
);

export default Bubble;
