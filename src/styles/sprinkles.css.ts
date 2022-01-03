import { vars, space } from './theme.css'
import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'

/**
 * Generates of custom utility classes based off of global CSS variables (defined in /styles/themes.css.ts) 
 *
 * @see https://vanilla-extract.style/documentation/sprinkles-api/
 */

const responsiveStyles = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
    wide: { '@media': 'screen and (min-width: 1200px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    alignItems: [
      'auto',
      'baseline',
      'center',
      'flex-start',
      'flex-end',
      'stretch',
    ],
    backgroundColor: vars.color,
    border: vars.border.preset,
    borderBottom: vars.border.preset,
    borderColor: vars.border.color,
    borderRadius: vars.border.radius,
    borderStyle: [
      'none',
      'hidden',
      'dotted',
      'dashed',
      'solid',
      'double',
      'groove',
      'ridge',
      'inset',
      'outset',
    ],
    borderTop: vars.border.preset,
    borderWidth: vars.border.width,
    boxShadow: vars.shadow,
    color: vars.color,
    display: ['none', 'block', 'inline', 'inline-block', 'inline-flex', 'flex'],
    fill: vars.color,
    flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
    flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
    fontSize: vars.font.size,
    fontWeight: vars.font.weight,
    height: vars.elementSize,
    justifyContent: [
      'flex-start',
      'center',
      'flex-end',
      'space-between',
      'space-around',
    ],
    lineHeight: vars.font.lineHeight,
    listStyle: [
      'disc',
      'circle',
      'square',
      'decimal',
      'decimal-leading-zero',
      'lower-roman',
      'upper-roman',
      'lower-alpha',
      'upper-alpha',
      'none',
    ],
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
    maxWidth: vars.elementSize,
    minHeight: vars.elementSize,
    outline: vars.outline,
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    position: ['absolute', 'relative', 'fixed'],
    top: space,
    bottom: space,
    left: space,
    right: space,
    stroke: vars.color,
    strokeWidth: [0, 1, 2, 3, 4, 5],
    textAlign: ['left', 'center', 'right'],
    textTransform: [
      'capitalize',
      'inherit',
      'initial',
      'lowercase',
      'none',
      'revert',
      'unset',
      'uppercase',
    ],
    width: vars.elementSize,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
  },
})

const unresponsiveStyles = defineProperties({
  properties: {
    flexShrink: [0, 1],
    fontFamily: {
      body: vars.font.body,
      heading: vars.font.heading
    },
    textDecoration: ['none', 'underline'],
  },
})

export const atoms = createSprinkles(responsiveStyles, unresponsiveStyles)

export type Atoms = Parameters<typeof atoms>[0]
