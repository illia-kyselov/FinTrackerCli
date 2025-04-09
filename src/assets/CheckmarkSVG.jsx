import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CheckmarkSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon"
        viewBox="0 0 512 512"
        {...props}
    >
        <Path
            fill="none"
            stroke={props.stroke || '#56ED6B'}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={32}
            d="M416 128 192 384l-96-96"
        />
    </Svg>
);

export default CheckmarkSVG;
