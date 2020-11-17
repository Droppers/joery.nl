import React from "react";

const Logo = props => (
  <svg
    width={24}
    height={24}
    className="prefix__d-inline-block prefix__align-top"
    viewBox="0 0 24.308 24.308"
    {...props}
  >
    <defs>
      <linearGradient
        id="prefix__linearGradient918"
        x1={33.844}
        x2={0}
        y1={33.848}
        y2={-0.001}
        gradientTransform="matrix(.71822 0 0 .71815 0 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          className="prefix__gradient-primary-stop"
          offset={0}
          stopColor="#4355e9"
        />
        <stop
          className="prefix__gradient-primary-start"
          offset={1}
          stopColor="#8c55ea"
        />
      </linearGradient>
    </defs>
    <rect
      width={24.308}
      height={24.308}
      fill="url(#prefix__linearGradient918)"
      rx={3.946}
      ry={3.946}
    />
    <path
      fill="#fff"
      d="M10.947 7.5a.995.995 0 00-.989 1.005v4.856a1.412 1.436 0 01-1.412 1.436 1.412 1.436 0 01-1.412-1.436.988 1.005 0 00-.99-1.004.988 1.005 0 00-.987 1.004.988 1.005 0 00.005.088 3.39 3.446 0 003.384 3.358 3.39 3.446 0 003.388-3.446V8.079a.576.576 0 00-.578-.578H10.947zm2.44 0a.579.579 0 00-.58.58v.816c0 .32.258.58.58.58h2.316c.784.001 1.42.62 1.434 1.386l.002 1.291-.002 1.292a1.424 1.424 0 01-1.433 1.386h-.72a.994.994 0 00-1.007.987c0 .548.45.99 1.006.99h.72c1.864 0 3.373-1.458 3.436-3.275h.011s-.002-.807 0-2.644v-.115h-.011C19.076 8.957 17.567 7.5 15.704 7.5h-1.502z"
    />
  </svg>
);

export default Logo;
