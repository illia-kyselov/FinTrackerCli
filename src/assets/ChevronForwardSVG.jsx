import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronForwardSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...props}
    >
        <Path
            fill="none"
            stroke="#56ed6b"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={48}
            d="m184 112 144 144-144 144"
        />
    </Svg>
);

export default ChevronForwardSVG;
