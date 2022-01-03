import { style, globalStyle } from "@vanilla-extract/css";

export const base = style({
  backgroundColor: "#EEE",
  height: "100vh"
})

globalStyle('html, body', {
  margin: 0
})