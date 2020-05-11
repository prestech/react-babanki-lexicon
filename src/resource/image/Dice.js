import * as React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  RadialGradient,
  Path,
  G,
  Use,
} from 'react-native-svg';

function SvgDice(props) {
  return (
    <Svg viewBox="0 0 48 48" {...props}>
      <Defs>
        <LinearGradient id="dice_svg__a">
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={1} />
        </LinearGradient>
        <LinearGradient
          id="dice_svg__c"
          y2={135.08}
          gradientUnits="userSpaceOnUse"
          x2={278.1}
          gradientTransform="matrix(1.0023 0 0 1.0169 -.007 -2.357)"
          y1={33.372}
          x1={135.08}>
          <Stop offset={0} stopColor="#ececec" />
          <Stop offset={1} stopColor="#b5b5b5" />
        </LinearGradient>
        <LinearGradient
          id="dice_svg__d"
          y2={65.155}
          gradientUnits="userSpaceOnUse"
          x2={73.895}
          gradientTransform="matrix(1.0048 0 0 1.013 -.002 -4.715)"
          y1={245.52}
          x1={79.457}>
          <Stop offset={0} stopColor="#b3b3b3" />
          <Stop offset={0.661} stopColor="#bfbfbf" />
          <Stop offset={1} stopColor="#ebebeb" />
        </LinearGradient>
        <LinearGradient
          id="dice_svg__e"
          y2={108.86}
          gradientUnits="userSpaceOnUse"
          x2={187.52}
          gradientTransform="matrix(.99211 0 0 .98444 2.757 .936)"
          y1={292.4}
          x1={263}>
          <Stop offset={0} stopColor="gray" />
          <Stop offset={0.834} stopColor="gray" />
          <Stop offset={1} stopColor="gray" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="dice_svg__h"
          y2={252.97}
          gradientUnits="userSpaceOnUse"
          x2={170.04}
          gradientTransform="matrix(.94833 0 0 1.0623 6.816 -21.727)"
          y1={252.67}
          x1={139.05}>
          <Stop offset={0} stopColor="#b4b4b4" />
          <Stop offset={1} stopColor="gray" />
        </LinearGradient>
        <LinearGradient
          id="dice_svg__i"
          y2={95.349}
          gradientUnits="userSpaceOnUse"
          x2={232.02}
          y1={131.9}
          x1={246.32}>
          <Stop offset={0} stopColor="gray" />
          <Stop offset={0.598} stopColor="#d0d0d0" />
          <Stop offset={0.787} stopColor="#d9d9d9" />
          <Stop offset={1} stopColor="#cecece" />
        </LinearGradient>
        <LinearGradient
          id="dice_svg__n"
          y2={79.457}
          gradientUnits="userSpaceOnUse"
          x2={90.581}
          y1={139.84}
          x1={76.279}>
          <Stop offset={0} stopColor="#bcbcbc" />
          <Stop offset={1} stopColor="#e7e7e7" />
        </LinearGradient>
        <LinearGradient
          id="dice_svg__x"
          y2={-39.219}
          gradientUnits="userSpaceOnUse"
          x2={-33.287}
          gradientTransform="matrix(-.20663 -.26045 .30792 -.17406 155.2 114.85)"
          y1={-123.31}
          x1={-13.41}>
          <Stop offset={0} stopColor="#ccc" />
          <Stop offset={0.42} stopColor="#bdbdbd" />
          <Stop offset={0.552} stopColor="#b4b4b4" />
          <Stop offset={1} stopColor="#c8c8c8" />
        </LinearGradient>
        <LinearGradient
          id="dice_svg__y"
          y2={-54.424}
          gradientUnits="userSpaceOnUse"
          x2={-140}
          gradientTransform="matrix(-.21133 -.28432 .31493 -.19001 150.14 108.43)"
          y1={-34.424}
          x1={-70}>
          <Stop offset={0} stopColor="#ccc" />
          <Stop offset={0.461} stopColor="#b4b4b4" />
          <Stop offset={1} stopColor="gray" />
        </LinearGradient>
        <LinearGradient
          id="dice_svg__z"
          y2={-94.424}
          gradientUnits="userSpaceOnUse"
          x2={-160}
          gradientTransform="matrix(-.20663 -.26045 .30792 -.17406 154.65 110.69)"
          y1={-171.54}
          x1={-87.955}>
          <Stop offset={0} stopColor="#ccc" />
          <Stop offset={0.573} stopColor="#b4b4b4" />
          <Stop offset={1} stopColor="gray" />
        </LinearGradient>
        <RadialGradient
          id="dice_svg__f"
          xlinkHref="#dice_svg__a"
          gradientUnits="userSpaceOnUse"
          cy={242.56}
          cx={342.86}
          gradientTransform="matrix(.36634 .09991 -.20861 .76488 236.47 25.969)"
          r={23.859}
        />
        <RadialGradient
          id="dice_svg__g"
          xlinkHref="#dice_svg__a"
          gradientUnits="userSpaceOnUse"
          cy={282.15}
          cx={219.69}
          gradientTransform="matrix(.32269 .09589 -.19982 .67245 204 78.197)"
          r={23.859}
        />
        <RadialGradient
          id="dice_svg__j"
          xlinkHref="#dice_svg__a"
          gradientUnits="userSpaceOnUse"
          cy={103.24}
          cx={259.41}
          gradientTransform="matrix(-.11491 -.25499 .39474 -.17789 265.57 148.08)"
          r={30.114}
        />
        <RadialGradient
          id="dice_svg__k"
          xlinkHref="#dice_svg__a"
          gradientUnits="userSpaceOnUse"
          cy={102.71}
          cx={184.74}
          gradientTransform="matrix(.1073 .22488 -.32399 .15459 190.54 38.408)"
          r={34.335}
        />
        <RadialGradient
          id="dice_svg__l"
          xlinkHref="#dice_svg__a"
          gradientUnits="userSpaceOnUse"
          cy={238.48}
          cx={300.1}
          gradientTransform="matrix(.0844 -.83577 .43205 .04363 185.49 371.17)"
          r={23.859}
        />
        <RadialGradient
          id="dice_svg__m"
          xlinkHref="#dice_svg__a"
          gradientUnits="userSpaceOnUse"
          cy={163.6}
          cx={230.58}
          gradientTransform="matrix(.34207 .0358 -.07776 .74294 152.85 40.508)"
          r={23.859}
        />
        <RadialGradient
          id="dice_svg__o"
          xlinkHref="#dice_svg__a"
          gradientUnits="userSpaceOnUse"
          cy={117.22}
          cx={37.103}
          gradientTransform="matrix(.34914 -.21992 .40044 .63573 -25.152 63.157)"
          r={18.41}
        />
        <RadialGradient
          id="dice_svg__p"
          gradientUnits="userSpaceOnUse"
          cy={150.57}
          cx={158.91}
          gradientTransform="matrix(.64412 -1.5728 2.1875 .72334 -272.81 291.6)"
          r={24.632}>
          <Stop offset={0} stopColor="#ccc" />
          <Stop offset={0.461} stopColor="#b4b4b4" />
          <Stop offset={1} stopColor="gray" />
        </RadialGradient>
        <RadialGradient
          id="dice_svg__b"
          gradientUnits="userSpaceOnUse"
          cy={38}
          cx={20}
          gradientTransform="matrix(1.0608 0 0 .1109 -1.216 33.786)"
          r={23.567}>
          <Stop offset={0} />
          <Stop offset={1} stopOpacity={0} />
        </RadialGradient>
      </Defs>
      <Path
        d="M47.134 38A23.567 2.614 0 110 38a23.567 2.614 0 1147.134 0z"
        transform="translate(1.433 2.386)"
        fillRule="evenodd"
        fill="url(#dice_svg__b)"
      />
      <G id="dice_svg__A">
        <G transform="matrix(.07528 0 0 .08338 .835 7.28)">
          <Path
            d="M190.56-2.337c16.58-3.24 116.85 40.147 151.69 57.839 24.55 12.468-193.9 84.338-193.9 84.338C102.43 111.16-3.83 100.58 3.43 59.474c-.583-9.927 43.58-21.971 52.313-25.163 8.734-3.192 125.35-39.843 134.82-36.648z"
            fillRule="evenodd"
            fill="url(#dice_svg__c)"
          />
          <Path
            d="M.353 66.883c11.317-23.132 151.55 57.877 150.49 76.947 6.35 74.71 20.79 233.35.71 212.91L17.833 255.69C8.197 243.01-1.102 135.56.356 66.88z"
            fillRule="evenodd"
            fill="url(#dice_svg__d)"
          />
          <Path
            d="M348.61 66.615L149.6 137.99s-.78 210.86 11.24 222.72c11.62 11.45 177.52-82.12 181.59-95.79 6.52-21.84 6.18-198.3 6.18-198.3z"
            fillRule="evenodd"
            fill="url(#dice_svg__e)"
          />
          <Path
            d="M318.91 254.9c-7.96 16.54-22.93 25.86-33.43 20.8-10.5-5.05-12.55-22.56-4.59-39.1s22.92-25.85 33.42-20.8c10.5 5.06 12.56 22.57 4.6 39.1z"
            fill="url(#dice_svg__f)"
          />
          <Path
            d="M227.14 298.15c-7.95 16.54-22.92 25.85-33.42 20.8-10.5-5.06-12.56-22.57-4.59-39.1 7.95-16.54 22.92-25.86 33.42-20.8 10.5 5.05 12.56 22.56 4.59 39.1z"
            fill="url(#dice_svg__g)"
          />
          <Path
            d="M171.08 138.65c-16.28 8.8-30.92 1.13-39.18-6.75l5.27 209.34c8.63 11.44 24.79 28.79 37.68 16.88 2.91-2.69-3.01-217.78-3.77-219.47z"
            fillRule="evenodd"
            fill="url(#dice_svg__h)"
          />
          <Path
            d="M149.38 175.6c-1.2-24.05-3.33-42.41-18.28-51.65l198.65-74.686c15.79 3.115 20.81 5.912 19.07 38.139L149.38 175.6z"
            fillRule="evenodd"
            fill="url(#dice_svg__i)"
          />
          <Path
            d="M268.1 46.67c16.27 2.224 26.7 9.579 23.3 16.426-3.41 6.848-19.37 10.593-35.64 8.364-16.28-2.223-26.71-9.578-23.3-16.426 3.41-6.847 19.36-10.592 35.64-8.364z"
            fill="url(#dice_svg__j)"
          />
          <Path
            id="dice_svg__q"
            d="M169.82 109.23c18.55-2.4 30.45-10.354 26.56-17.756-3.88-7.401-22.08-11.449-40.63-9.04-18.55 2.403-30.45 10.353-26.57 17.756 3.89 7.4 22.08 11.45 40.64 9.04z"
            fill="url(#dice_svg__k)"
          />
          <Path
            d="M321.01 146.26c-7.95 16.54-22.92 25.86-33.42 20.8-10.5-5.05-12.56-22.56-4.59-39.09 7.96-16.54 22.92-25.86 33.42-20.8 10.5 5.05 12.56 22.56 4.59 39.09z"
            fill="url(#dice_svg__l)"
          />
          <Path
            d="M226.09 185.82c-7.96 16.54-22.92 25.85-33.42 20.8-10.5-5.06-12.56-22.56-4.6-39.1s22.93-25.85 33.43-20.8 12.55 22.56 4.59 39.1z"
            fill="url(#dice_svg__m)"
          />
          <Path
            d="M142.23 167.65c-3.61-18.32-8.11-36.95 25.42-42.9L27.81 44.496C-8.516 53.889 1.354 67.369 4.767 90.581l137.46 77.069z"
            fillRule="evenodd"
            fill="url(#dice_svg__n)"
          />
          <Path
            id="dice_svg__s"
            d="M22.169 130.43c7.424 14.9 19.074 22.39 26.019 16.74s6.552-22.31-.877-37.21c-7.423-14.896-19.073-22.393-26.018-16.74s-6.552 22.31.876 37.21z"
            fill="url(#dice_svg__o)"
          />
          <Path
            d="M183.55 150.57c0 13.39-11.03 24.25-24.64 24.25-13.6 0-24.63-10.86-24.63-24.25s11.03-24.24 24.63-24.24c13.61 0 24.64 10.85 24.64 24.24z"
            transform="matrix(1 0 0 1.0984 -3.178 -9.248)"
            fillRule="evenodd"
            fill="url(#dice_svg__p)"
          />
          <Use
            id="dice_svg__r"
            xlinkHref="#dice_svg__q"
            transform="translate(15.097 -35.756)"
            height={367.093}
            width={349.469}
            y={0}
            x={0}
          />
          <Use
            xlinkHref="#dice_svg__r"
            transform="matrix(.90743 0 0 .85905 -70.937 12.043)"
            height={367.093}
            width={349.469}
          />
          <Use
            xlinkHref="#dice_svg__r"
            transform="matrix(.89586 0 0 .7463 15.743 -15.35)"
            height={367.093}
            width={349.469}
          />
          <Use
            id="dice_svg__t"
            xlinkHref="#dice_svg__s"
            transform="matrix(.95684 0 0 .9174 7.856 75.083)"
            height={367.093}
            width={349.469}
            y={0}
            x={0}
          />
          <Use
            id="dice_svg__u"
            xlinkHref="#dice_svg__t"
            transform="matrix(.95489 0 0 .92497 5.032 70.718)"
            height={367.093}
            width={349.469}
            y={0}
            x={0}
          />
          <Use
            id="dice_svg__v"
            xlinkHref="#dice_svg__u"
            transform="matrix(1.2598 0 0 1.2758 64.379 -11.562)"
            height={367.093}
            width={349.469}
            y={0}
            x={0}
          />
          <Use
            id="dice_svg__w"
            xlinkHref="#dice_svg__v"
            transform="matrix(.86876 0 0 .87284 9.81 -27.34)"
            height={367.093}
            width={349.469}
            y={0}
            x={0}
          />
          <Use
            xlinkHref="#dice_svg__w"
            transform="matrix(.93526 0 0 1.1457 3.023 -102.17)"
            height={367.093}
            width={349.469}
          />
        </G>
        <G fillRule="evenodd">
          <Path
            d="M124.18 162.57l22.68-9.95 7.83-22.58c-8.99-4.42-18.99-5.06-26.43-.86-10.95 6.19-12.51 20.69-4.08 33.39z"
            fill="url(#dice_svg__x)"
            transform="matrix(.07848 0 0 .0907 .862 6.33)"
          />
          <Path
            d="M146.43 150.58L170 174.69c8.47-8.33 8.19-23.68-1.38-36.56-4.08-5.48-9.27-9.74-14.79-12.51l-7.4 24.96z"
            fill="url(#dice_svg__y)"
            transform="matrix(.07848 0 0 .0907 .862 6.33)"
          />
          <Path
            d="M127.19 163.64c10.53 13.27 28.57 18.66 40.29 12.04 1.3-.74 2.47-1.6 3.51-2.55l-23.05-22.08-22.94 9.53c.67 1.03 1.4 2.05 2.19 3.06z"
            fill="url(#dice_svg__z)"
            transform="matrix(.07848 0 0 .0907 .862 6.33)"
          />
        </G>
      </G>
      <Use
        xlinkHref="#dice_svg__A"
        transform="matrix(.96251 .29653 -.24812 .96251 24.396 -2.471)"
        height={365.576}
        width={619.733}
      />
    </Svg>
  );
}

export default SvgDice;
