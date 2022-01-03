import React from 'react'

import {
  Box,
  BoxDefaultProps,
  BoxStylingMarginProps,
  BoxStylingPaddingProps,
  BoxStylingProps,
} from '../../components/Box'

import { Atoms } from '../../styles/sprinkles.css'

type ColumnDefaultProps = {
  width?: Atoms['width']
  styles?: BoxStylingProps & BoxStylingMarginProps & BoxStylingPaddingProps
}

type ColumnProps = ColumnDefaultProps & BoxDefaultProps

const Column = ({
  width = "max",
  styles,
  ...nativeProps
}: ColumnProps) => {
  return (
    <Box
      padding="m"
      width={width}
      {...styles}
      {...nativeProps}
    >
      {nativeProps.children}
    </Box>
  )
}

Column.displayName = 'Column'

export default Column
