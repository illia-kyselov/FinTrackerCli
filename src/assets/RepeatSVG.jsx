import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const RepeatSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...props}
    >
        <Path
            fill="none"
            stroke="#56ED6B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={32}
            d="m320 120 48 48-48 48"
        />
        <Path
            fill="none"
            stroke="#56ED6B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={32}
            d="M352 168H144a80.24 80.24 0 0 0-80 80v16m128 128-48-48 48-48"
        />
        <Path
            fill="none"
            stroke="#56ED6B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={32}
            d="M160 344h208a80.24 80.24 0 0 0 80-80v-16"
        />
    </Svg>
);

export default RepeatSVG;
