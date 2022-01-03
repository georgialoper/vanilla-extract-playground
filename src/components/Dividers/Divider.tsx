import React from 'react'

import { Box, BoxDefaultProps, BoxStylingProps } from '../Box'

type DividerDefaultProps = {
  styles?: BoxStylingProps
}

type DividerProps = DividerDefaultProps & BoxDefaultProps

const Divider = ({ styles }: DividerProps) => {
  return (
    <Box
      borderTop="default"
      marginY="s"
      {...styles}
    />
  )
}

Divider.displayName = "Divider"

export default Divider