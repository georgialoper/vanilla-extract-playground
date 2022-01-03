import React, { forwardRef } from 'react'
import { Box, BoxDefaultProps, BoxStylingProps } from '../Box'

type LinkDefaultProps = {
  href: string,
  target?: string,
  styles?: BoxStylingProps
}

type LinkProps = LinkDefaultProps & BoxDefaultProps

const Link = forwardRef(({ href, target, styles, ...nativeProps }: LinkProps, ref) => {
  return (
    <Box
      fontFamily='body'
      fontSize='s'
      lineHeight='s'
      color='darkTeal'
      textDecoration='none'
      tag="a"
      ref={ref}
      {...styles}
      {...nativeProps}
    >
      {nativeProps.children}
    </Box>
  )
})

Link.displayName = 'Link'

export default Link