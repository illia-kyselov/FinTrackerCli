import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowBackSVG = (props) => {
    const {
        stroke = 'currentColor',
        fill = 'none',
        ...rest
    } = props;

    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            {...rest}
        >
            <Path
                stroke={stroke}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={48}
                d="M244 400 100 256l144-144M120 256h292"
            />
        </Svg>
    );
};

export default ArrowBackSVG;
