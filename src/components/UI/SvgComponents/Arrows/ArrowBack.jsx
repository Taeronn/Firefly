import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ArrowBack = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={36}
        height={36}
        fill="none"
        {...props}
    >
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M28.5 18h-21M18 7.5 7.5 18 18 28.5"
        />
    </Svg>
)
export default ArrowBack
