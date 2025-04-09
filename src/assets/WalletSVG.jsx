import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

const WalletSVG = (props) => {
    const {
        stroke = '#56ED6B',
        ...rest
    } = props;

    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon"
            viewBox="0 0 512 512"
            {...rest}
        >
            <Rect
                width={416}
                height={288}
                x={48}
                y={144}
                fill="none"
                stroke={stroke}
                strokeLinejoin="round"
                strokeWidth={32}
                rx={48}
                ry={48}
            />
            <Path
                fill="none"
                stroke={stroke}
                strokeLinejoin="round"
                strokeWidth={32}
                d="M411.36 144v-30A50 50 0 0 0 352 64.9L88.64 109.85A50 50 0 0 0 48 159v49"
            />
            <Path
                fill={stroke}
                d="M368 320a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"
            />
        </Svg>
    );
};

export default WalletSVG;
