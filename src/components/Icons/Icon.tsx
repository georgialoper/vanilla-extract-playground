import React, { forwardRef } from 'react'
import {
  Box,
  BoxDefaultProps,
  BoxStylingProps,
} from '../Box'

import SvgArrowDropDown from './svgs/SvgArrowDropDown'
import SvgFacebook from './svgs/SvgFacebook'
import SvgLanguage from './svgs/SvgLanguage'
import SvgTwitter from './svgs/SvgTwitter'


import { Atoms } from '../../styles/sprinkles.css'

export type IconName = 'arrowDropDown'
  | 'facebook'
  | 'language'
  | 'twitter'

export type IconSvgProps = {
  fill?: Atoms['fill']
}

type IconVariant = 'default' | 'border' | 'circle' | 'square'

type IconDefaultProps = {
  bold?: boolean
  variant?: IconVariant
  iconName: IconName
  iconSize?: Atoms['width']
  palette?: Atoms['color']
  styles?: BoxStylingProps
  transparentIcon?: boolean
}

type IconProps = IconDefaultProps & BoxDefaultProps

const Icon = forwardRef(
  (
    {
      bold = false,
      variant = 'default',
      palette = 'primary',
      iconName,
      iconSize = 'xxs',
      styles,
      transparentIcon = false,
      ...nativeProps
    }: IconProps,
    ref
  ) => {

    const iconTagMap = {
      arrowDropDown: SvgArrowDropDown,
      facebook: SvgFacebook,
      language: SvgLanguage,
      twitter: SvgTwitter
    }

    const IconTag = iconTagMap[iconName]

    return (
      <Box
        backgroundColor={
          variant === 'circle' || variant === 'square' ? palette : undefined
        }
        borderColor={variant === 'border' ? palette : undefined}
        borderRadius="circle"
        borderStyle="solid"
        borderWidth={variant === 'border' ? 's' : undefined}
        display="inline-block"
        height={iconSize}
        flexShrink={0}
        position="relative"
        ref={ref}
        tag="span"
        width={iconSize}
        {...styles}
        {...nativeProps}
      >
        {transparentIcon ? null : (
          <IconTag
            fill={palette}
          />
        )}
      </Box>
    )
  }
)

Icon.displayName = 'Icon'

export default Icon
