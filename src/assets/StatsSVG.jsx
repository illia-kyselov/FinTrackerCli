import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';

const StatsSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...props}
    >
        <Rect
            width={48}
            height={160}
            x={64}
            y={320}
            fill="none"
            stroke="#56ED6B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={32}
            rx={8}
            ry={8}
        />
        <Rect
            width={48}
            height={256}
            x={288}
            y={224}
            fill="none"
            stroke="#56ED6B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={32}
            rx={8}
            ry={8}
        />
        <Rect
            width={48}
            height={368}
            x={400}
            y={112}
            fill="none"
            stroke="#56ED6B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={32}
            rx={8}
            ry={8}
        />
        <Rect
            width={48}
            height={448}
            x={176}
            y={32}
            fill="none"
            stroke="#56ED6B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={32}
            rx={8}
            ry={8}
        />
    </Svg>
);

export default StatsSVG;
