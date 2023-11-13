import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '#F9F9F9',
    color: '#2C2C2C'
  },

  'body, input, textarea, button': {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 400,
    overflowX: 'hidden'
  }
})