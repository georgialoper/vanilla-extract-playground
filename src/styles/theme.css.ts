import { createGlobalTheme } from '@vanilla-extract/css'

const colorNames = {
  extraLightTeal: "#EFFAFB",
  lightTeal: "#C1E9E7",
  teal: "#00B1AC",
  buttonTeal: "#00A19A",
  darkTeal: "#00807B",
  darkTeal2: "#00625F",
  gold: "#FFCC33",
  white: "#FFFFFF",
  lightGrey: "#F3F3F3",
  standardGrey: "#E7E7E7",
  mediumGrey: "#C2C2C2",
  darkGrey: "#757575",
  black: "#222929",
  extraLightRed: "#FFE8E6",
  mediumRed: "#F55B49",
  red: "#B00020",
  extraLightCopper: "#FFF7E6",
  copper: "#E6B658",
  darkCopper: "#996600",
  extraLightGreen: "#F2FFF0",
  green: "#00A830",
  lightPeriwinkle: "#E8F0FE",
  focus: "#116ab6",
  transparent: "transparent"
}

export const colors = {
  primary: colorNames.teal,
  secondary: colorNames.darkGrey,
  tertiary: colorNames.copper,
  ...colorNames,
}

export const space = {
  '-m': '-1rem',
  '-s': '-0.75rem',
  '-xs': '-0.5rem',
  '-xxs': '-0.25rem',
  auto: 'auto',
  none: '0',
  xxs: '0.25rem',
  xs: '0.5rem',
  s: '0.75rem',
  m: '1rem',
  l: '1.5rem',
  x2: '2rem',
  x3: '3rem',
}

export const vars = createGlobalTheme(':root', {
  border: {
    color: colors,
    preset: {
      default: `1px solid ${colors.mediumGrey}`,
      teal: `1px solid ${colors.buttonTeal}`,
      none: 'none',
    },
    radius: {
      none: '0',
      circle: '50%',
      s: '0.125rem',
      m: '0.25rem',
      l: '0.5rem',
      xl: '1rem',
      xxl: '2rem',
    },
    width: {
      none: '0',
      xs: '0.25px',
      s: '0.5px',
      m: '1px',
      l: '2px',
      xl: '3px',
    },
  },
  color: colors,
  elementSize: {
    auto: 'auto',
    none: '0',
    quarter: '25%',
    third: '33.33%',
    half: '50%',
    max: '100%',
    '1/12': '8.33%',
    '2/12': '16.66%',
    '3/12': '25.00%',
    '4/12': '33.33%',
    '5/12': '41.66%',
    '6/12': '50.00%',
    '7/12': '58.33%',
    '8/12': '66.66%',
    '9/12': '75.00%',
    '10/12': '83.33%',
    '11/12': '91.66%',
    '12/12': '100%',
    maxColumns: '1432px',
    '100vh': '100vh',
    xxs: '2rem',
    xs: '3rem',
    s: '5rem',
    m: '7rem',
    l: '9rem',
  },
  font: {
    heading: "'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    body: "'Helvetica Neue', Helvetica, Arial, sans-serif;",
    weight: {
      light: '300',
      regular: '400',
      semibold: '600',
      bold: '700'
    },
    size: {
      xs: '0.875rem',//14px
      s: '0.938',//15px
      m: '1rem',//16px
      ml: '1.125',//18px
      l: '1.25',//20px
      xl: '1.5rem',//24px
      x2: '2rem',//32px
      x3: '3rem',//48px
    },
    lineHeight: {
      '0': '0',
      xs: '1.5rem',//24px
      s: '1.5rem',//24px
      m: '1.5rem',//24px
      ml: '1.5rem',//24px
      l: '2rem',//32px
      xl: '2rem',//32px
      x2: '3rem',//48px
      x3: '4rem'//64px
    },
  },
  outline: {
    focus: `2px solid ${colors.focus}`,
    none: '0'
  },
  shadow: {
    default: '0px 2px 5px rgba(34, 41, 41, 0.24)'
  },
  space: space
})
