import React, { forwardRef, ReactElement } from 'react'
import { Box, BoxDefaultProps, BoxAttributeProps } from '../Box'

type LinkNoStyleDefaultProps = {
  href: string
}

type LinkNoStyleProps = LinkNoStyleDefaultProps & BoxDefaultProps & BoxAttributeProps

const LinkNoStyle = forwardRef(({ href, ...nativeProps }: LinkNoStyleProps, ref): ReactElement => {
  return (
    <Box
      display="inline-block"
      lineHeight="0"
      href={href}
      ref={ref}
      tag="a"
      {...nativeProps}
    >
      {nativeProps.children}
    </Box>
  )
})

LinkNoStyle.displayName = 'LinkNoStyle'

export default LinkNoStyle