import React, { Children } from "react";
import { Box, BoxDefaultProps, BoxStylingMarginProps, BoxStylingPaddingProps, BoxStylingProps } from '../Box'
import { Atoms } from '../../styles/sprinkles.css'

type StackDefaultProps = {
  direction: "column" | "row"
  spacing?: Atoms['margin']
  align?: Atoms["alignItems"]
  justify?: Atoms["justifyContent"]
  wrap?: Atoms["flexWrap"]
  styles?: BoxStylingProps & BoxStylingMarginProps & BoxStylingPaddingProps
}

type StackProps = StackDefaultProps & BoxDefaultProps

const Stack = ({
  align,
  direction = "column",
  justify,
  spacing = "m",
  wrap,
  styles,
  ...nativeProps
}: StackProps) => {
  return (
    <Box
      alignItems={align}
      display="flex"
      justifyContent={justify}
      flexDirection={direction}
      flexWrap={wrap}
      {...styles}
    >
      {Children.map(nativeProps.children, (child, index) => {
        const isFirstItem = index == 0
        return (
          <Box
            marginTop={direction == "column" && !isFirstItem ? spacing : "none"}
            marginLeft={direction == "row" && !isFirstItem ? spacing : "none"}
          >
            {child}
          </Box>
        )
      })}
    </Box>
  )
}

Stack.displayName = "Stack"

export default Stack

export const HStack = (props: Omit<StackProps, "direction">) => (
  <Stack {...props} direction="row">{props.children}</Stack>
)

export const VStack = (props: Omit<StackProps, "direction">) => (
  <Stack {...props} direction="column">{props.children}</Stack>
)