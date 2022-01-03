import React from 'react'

import {
  Box,
  BoxDefaultProps,
  BoxStylingMarginProps,
  BoxStylingPaddingProps,
  BoxStylingProps,
} from '../../components/Box'

type ColumnsDefaultProps = {
  embedded?: boolean
  styles?: BoxStylingProps & BoxStylingMarginProps & BoxStylingPaddingProps
}

type ColumnsProps = ColumnsDefaultProps & BoxDefaultProps

const Columns = ({ embedded = false, styles, ...nativeProps }: ColumnsProps) => {
  return (
    <Box
      alignItems="stretch"
      display="flex"
      flexWrap="wrap"
      marginX={embedded ? '-m' : 'auto'}
      maxWidth="maxColumns"
      {...styles}
      {...nativeProps}
    >
      {nativeProps.children}
    </Box>
  )
}

Columns.displayName = 'Columns'

export default Columns
