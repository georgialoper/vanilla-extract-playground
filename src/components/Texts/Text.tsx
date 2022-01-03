import React from 'react'
import { Box, BoxDefaultProps, BoxStylingProps } from './../Box'

type TextDefaultProps = {
  bold?: boolean,
  variant?: "body" | "micro"
  styles?: BoxStylingProps
}

export type TextProps = TextDefaultProps & BoxDefaultProps

const Text = ({
  bold,
  variant = "body",
  styles,
  ...nativeProps
}: TextProps) => {

  const fontWeight = () => {
    if (bold) return "bold"
    if (variant == "micro") return "light"
    return "regular"
  }

  return (
    <Box
      color={variant == "body" ? "black" : "mediumGrey"}
      fontFamily="body"
      fontWeight={fontWeight()}
      fontSize={variant == "body" ? { mobile: "s", tablet: "m" } : { mobile: "xs", tablet: "s" }}
      tag="p"
      {...styles}
      {...nativeProps}
    >
      {nativeProps.children}
    </Box>
  )
}

Text.displayName = "Text"

export default Text