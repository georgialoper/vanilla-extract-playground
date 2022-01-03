import React, { ReactElement } from 'react'

import { atoms } from '../../../styles/sprinkles.css'

import { IconSvgProps } from '../Icon'

const SvgArrowDropDown = ({ fill }: IconSvgProps): ReactElement => (
  <svg
    className={atoms({
      height: 'max',
      left: 'none',
      position: 'absolute',
      top: 'none',
      width: 'max',
    })}
    viewBox="0 0 40 40"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className={atoms({ fill })}
      d="M8 14L20 26L32 14H8Z"
    />
  </svg>
)

SvgArrowDropDown.displayName = 'SvgArrowDropDown'

export default SvgArrowDropDown
