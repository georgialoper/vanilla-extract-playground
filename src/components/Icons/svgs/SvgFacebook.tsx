import React, { ReactElement } from 'react'

import { atoms } from '../../../styles/sprinkles.css'

import { IconSvgProps } from '../Icon'

const SvgFacebook = ({ fill }: IconSvgProps): ReactElement => (
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
      d="M14.3832 20.315H16.9871V31.5968C16.9871 31.8195 17.1586 32 17.3703 32H21.7855C21.9971 32 22.1686 31.8195 22.1686 31.5968V20.3681H25.1621C25.3568 20.3681 25.5205 20.2144 25.5427 20.011L25.9974 15.8576C26.0099 15.7433 25.9755 15.6289 25.9028 15.5431C25.8301 15.4573 25.726 15.4082 25.6168 15.4082H22.1688V12.8047C22.1688 12.0198 22.5703 11.6219 23.3624 11.6219C23.4752 11.6219 25.6168 11.6219 25.6168 11.6219C25.8285 11.6219 26 11.4413 26 11.2186V7.40621C26 7.18347 25.8285 7.00298 25.6168 7.00298H22.5099C22.4879 7.00185 22.4393 7 22.3675 7C21.8284 7 19.9546 7.11137 18.4744 8.54444C16.8343 10.1325 17.0623 12.034 17.1168 12.3636V15.4081H14.3832C14.1715 15.4081 14 15.5886 14 15.8114V19.9117C14 20.1344 14.1715 20.315 14.3832 20.315Z"
    />
  </svg>
)

SvgFacebook.displayName = 'SvgFacebook'

export default SvgFacebook
