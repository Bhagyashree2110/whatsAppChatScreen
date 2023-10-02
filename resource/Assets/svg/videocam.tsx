import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"

function SvgVideoCam(props:any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Mask
        id="a"
        maskUnits="userSpaceOnUse"
        x={-1}
        y={0}
        width={25}
        height={24}
      >
        <Path
          fill="#D9D9D9"
          d="M-0.00012207 -0.0000305176H23.99987793V23.9999694824H-0.00012207z"
        />
      </Mask>
      <G mask="url(#a)">
        <Path
          d="M4.548 19.5c-.505 0-.933-.175-1.283-.525a1.745 1.745 0 01-.525-1.283V6.308c0-.505.175-.933.525-1.283.35-.35.778-.525 1.283-.525h11.385c.505 0 .932.175 1.282.525.35.35.525.778.525 1.283v4.577l2.737-2.737a.43.43 0 01.499-.103c.189.075.283.22.283.434v7.042c0 .214-.094.359-.283.434a.43.43 0 01-.5-.103l-2.736-2.737v4.577c0 .505-.175.933-.525 1.283-.35.35-.777.525-1.282.525H4.548z"
          fill="#1C1B1F"
        />
      </G>
    </Svg>
  )
}

export default SvgVideoCam
