import React from 'react'

import clsx from 'clsx'

import {
  Box,
  BoxDefaultProps,
  BoxStylingBorderProps,
  BoxStylingMarginProps,
  BoxStylingPaddingProps,
  BoxStylingPositionProps,
  BoxStylingProps,
} from '../../components/Box'

import * as customStyles from './Container.css'

type ContainerDefaultProps = {
  spacing?: 'default' | 'none' | 'xs' | 's' | 'm' | 'l' | 'x2' | 'x3'
  styles?: BoxStylingProps & BoxStylingMarginProps & BoxStylingPaddingProps & BoxStylingPositionProps & BoxStylingBorderProps
}

type ContainerProps = ContainerDefaultProps & BoxDefaultProps

const Container =
  ({ spacing = 'default', styles, ...nativeProps }: ContainerProps) => {
    const classes = clsx(
      nativeProps.className,
      { [customStyles.containerSpacingDefault]: spacing === 'default' },
      { [customStyles.containerSpacingNone]: spacing === 'none' },
      { [customStyles.containerSpacingXs]: spacing === 'xs' },
      { [customStyles.containerSpacingS]: spacing === 's' },
      { [customStyles.containerSpacingM]: spacing === 'm' },
      { [customStyles.containerSpacingL]: spacing === 'l' },
      { [customStyles.containerSpacingXl]: spacing === 'x2' },
      { [customStyles.containerSpacingXxl]: spacing === 'x3' }
    )

    return (
      <Box {...styles} {...nativeProps} className={classes}>
        {nativeProps.children}
      </Box>
    )
  }

Container.displayName = 'Container'

export default Container
