import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MenuSVG = (props) => {
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
                fill={fill}
                stroke={stroke}
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={48}
                d="M88 152h336M88 256h336M88 360h336"
            />
        </Svg>
    );
};

export default MenuSVG;
