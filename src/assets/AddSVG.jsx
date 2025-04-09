import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const AddSVG = (props) => {
    const {
        stroke = '#56ED6B',
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
                strokeLinejoin="round"
                strokeWidth={32}
                d="M256 112v288m144-144H112"
            />
        </Svg>
    );
};

export default AddSVG;
