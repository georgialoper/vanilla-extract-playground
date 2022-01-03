import React, {
  AllHTMLAttributes,
  ElementType,
  forwardRef,
  ReactNode,
} from 'react'

import clsx from 'clsx'

// The order of these imports is important to ensure the classes
// are applied in the correct order
// https://github.com/seek-oss/vanilla-extract/discussions/301
import * as resetStyles from '../../styles/reset.css'
import { atoms, Atoms } from './../../styles/sprinkles.css'

export type BoxStylingProps = {
  alignItems?: Atoms['alignItems']
  backgroundColor?: Atoms['backgroundColor']
  boxShadow?: Atoms['boxShadow']
  color?: Atoms['color']
  display?: Atoms['display']
  fill?: Atoms['fill']
  flexDirection?: Atoms['flexDirection']
  flexShrink?: Atoms['flexShrink']
  flexWrap?: Atoms['flexWrap']
  fontFamily?: Atoms['fontFamily']
  fontSize?: Atoms['fontSize']
  fontWeight?: Atoms['fontWeight']
  height?: Atoms['height']
  justifyContent?: Atoms['justifyContent']
  lineHeight?: Atoms['lineHeight']
  listStyle?: Atoms['listStyle']
  maxWidth?: Atoms['maxWidth']
  minHeight?: Atoms['minHeight']
  textAlign?: Atoms['textAlign']
  textDecoration?: Atoms['textDecoration']
  textTransform?: Atoms['textTransform']
  width?: Atoms['width']
  // TODO: add more styling props
}

// Some style props have been broken out to seprate types to allow components
// to more explicitly define the styles we want to allow them to accept
export type BoxStylingBorderProps = {
  border?: Atoms['border']
  borderBottom?: Atoms['borderBottom']
  borderColor?: Atoms['borderColor']
  borderRadius?: Atoms['borderRadius']
  borderStyle?: Atoms['borderStyle']
  borderTop?: Atoms['borderTop']
  borderWidth?: Atoms['borderWidth']
}

export type BoxStylingMarginProps = {
  margin?: Atoms['margin']
  marginX?: Atoms['marginX']
  marginY?: Atoms['marginY']
  marginTop?: Atoms['marginTop']
  marginBottom?: Atoms['marginBottom']
  marginLeft?: Atoms['marginLeft']
  marginRight?: Atoms['marginRight']
}

export type BoxStylingPaddingProps = {
  padding?: Atoms['padding']
  paddingX?: Atoms['paddingX']
  paddingY?: Atoms['paddingY']
  paddingTop?: Atoms['paddingTop']
  paddingBottom?: Atoms['paddingBottom']
  paddingLeft?: Atoms['paddingLeft']
  paddingRight?: Atoms['paddingRight']
}

export type BoxStylingPositionProps = {
  bottom?: Atoms['bottom']
  left?: Atoms['left']
  position?: Atoms['position']
  right?: Atoms['right']
  top?: Atoms['top']
}

export type BoxDefaultProps = {
  className?: string
  children?: ReactNode
  tag?: ElementType
}

export type BoxAttributeProps = Omit<
  AllHTMLAttributes<HTMLElement>,
  | 'color'
  | 'height'
  | 'width'
>

export type BoxProps = BoxStylingProps &
  BoxStylingBorderProps &
  BoxStylingMarginProps &
  BoxStylingPaddingProps &
  BoxStylingPositionProps &
  BoxDefaultProps &
  BoxAttributeProps

/**
 * This is a 'blank' component that can resolve into any HTML tag the
 * consuming component requires and serves as a typed interface to expose
 * all possible styling keys as top-level props and all possible styling
 * values as the possible values of those keys for reuse by any component.
 * This is intended to be consumed by other ui components and not necessarily
 * for direct consumption of package-specific components.
 *
 * TODO: Link to further documentation
 */
const Box = forwardRef(
  ({ className, tag = 'div', ...props }: BoxProps, ref) => {
    const atomProps: Record<string, unknown> = {}
    const nativeProps: Record<string, unknown> = {}

    for (const key in props) {
      if (atoms.properties.has(key as keyof Atoms)) {
        atomProps[key] = props[key as keyof typeof props]
      } else {
        nativeProps[key] = props[key as keyof typeof props]
      }
    }

    const atomClasses = atoms({
      ...atomProps,
    })

    const classes = className
      ? `${className}${atomClasses ? ` ${atomClasses}` : ''}`
      : atomClasses

    const classesWithReset = clsx(
      classes,
      resetStyles.elementStyles[tag as keyof typeof resetStyles.elementStyles]
    )
    const Tag = tag

    return (
      <Tag
        className={classesWithReset}
        ref={ref}
        {...nativeProps}
      >
        {nativeProps.children}
      </Tag>
    )
  }
)

Box.displayName = 'Box'

export default Box
