// Adapted from: http://meyerweb.com/eric/tools/css/reset/ 
import { style } from '@vanilla-extract/css';

const base = style({
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  border: 0,
  fontSize: "100%",
  font: "inherit",
  verticalAlign: "baseline"
});

const html5 = style({
  display: "block"
});

const body = style({
  lineHeight: 1
});

const list = style({
  listStyle: "none"
});

const quote = style({
  quotes: "none",
  selectors: {
    "&:before, &:after": {
      content: ["''", "none"]
    }
  }
});

const table = style({
  borderCollapse: "collapse",
  borderSpacing: 0
});

export const elementStyles =
{
  a: base,
  abbr: base,
  acronym: base,
  address: base,
  applet: base,
  article: [base, html5],
  aside: [base, html5],
  audio: base,
  b: base,
  big: base,
  blockquote: [base, quote],
  body: [base, body],
  canvas: base,
  caption: base,
  center: base,
  cite: base,
  code: base,
  dd: base,
  del: base,
  details: [base, html5],
  dfn: base,
  div: base,
  dl: base,
  dt: base,
  em: base,
  embed: base,
  fieldset: base,
  figcaption: [base, html5],
  figure: [base, html5],
  footer: [base, html5],
  form: base,
  h1: base,
  h2: base,
  h3: base,
  h4: base,
  h5: base,
  h6: base,
  header: [base, html5],
  hgroup: [base, html5],
  html: base,
  i: base,
  iframe: base,
  img: base,
  ins: base,
  kbd: base,
  label: base,
  legend: base,
  li: base,
  mark: base,
  menu: [base, html5],
  nav: [base, html5],
  object: base,
  ol: [base, list],
  output: base,
  p: base,
  pre: base,
  q: [base, quote],
  ruby: base,
  s: base,
  samp: base,
  section: [base, html5],
  small: base,
  span: base,
  strike: base,
  strong: base,
  sub: base,
  summary: base,
  sup: base,
  table: [base, table],
  tbody: base,
  td: base,
  tfoot: base,
  th: base,
  thead: base,
  time: base,
  tr: base,
  tt: base,
  u: base,
  ul: [base, list],
  var: base,
  video: base
}
