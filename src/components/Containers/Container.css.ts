import { globalStyle, style } from '@vanilla-extract/css'

import { vars } from '../../styles/theme.css'

export const containerSpacingDefault = style({})
export const containerSpacingNone = style({})
export const containerSpacingXs = style({})
export const containerSpacingS = style({})
export const containerSpacingM = style({})
export const containerSpacingL = style({})
export const containerSpacingXl = style({})
export const containerSpacingXxl = style({})

globalStyle(`${containerSpacingNone} > *`, {
  marginBottom: vars.space.none,
})

globalStyle(`${containerSpacingXs} > *:not(:last-child)`, {
  marginBottom: vars.space.xs,
})

globalStyle(`${containerSpacingXs} > *:last-child`, {
  marginBottom: vars.space.none,
})

globalStyle(`${containerSpacingS} > *:not(:last-child)`, {
  marginBottom: vars.space.s,
})

globalStyle(`${containerSpacingS} > *:last-child`, {
  marginBottom: vars.space.none,
})

globalStyle(`${containerSpacingM} > *:not(:last-child)`, {
  marginBottom: vars.space.m,
})

globalStyle(`${containerSpacingM} > *:last-child`, {
  marginBottom: vars.space.none,
})

globalStyle(`${containerSpacingL} > *:not(:last-child)`, {
  marginBottom: vars.space.l,
})

globalStyle(`${containerSpacingL} > *:last-child`, {
  marginBottom: vars.space.none,
})

globalStyle(`${containerSpacingXl} > *:not(:last-child)`, {
  marginBottom: vars.space.x2,
})

globalStyle(`${containerSpacingXl} > *:last-child`, {
  marginBottom: vars.space.none,
})

globalStyle(`${containerSpacingXxl} > *:not(:last-child)`, {
  marginBottom: vars.space.x3,
})

globalStyle(`${containerSpacingXxl} > *:last-child`, {
  marginBottom: vars.space.none,
})
