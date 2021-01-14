import { createGlobalStyle } from 'styled-components'
import { colors } from './color.styles'
import { typography } from './font.styles'

export const GlobalStyle = createGlobalStyle`
  /* Colors variables */
  ${colors}

  /* Fonts variables */
  ${typography}

  /* General styles */

  :root {
    --navbar-max-width: 71.25rem;
    --content-max-width: 71.25rem;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Poppins', system-ui, sans-serif;
    background: ${({ theme }) => theme.colors.body.background};
    color: ${({ theme }) => theme.colors.body.text};
  }

  #__next {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    font-family: 'Poppins', system-ui, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
    display: inline-flex;
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    font-family: 'Poppins', system-ui, sans-serif;
  }

  h1 {
    font-size: var(--h1);
    font-weight: var(--bold);
  }

  h2 {
    font-size: var(--h2);
    font-weight: var(--bold);
  }

  h3 {
    font-size: var(--h3);
    font-weight: var(--semi);
  }

  h4 {
    font-size: var(--h4);
    font-weight: var(--semi);
  }

  h5 {
    font-size: var(--h5);
    font-weight: var(--normal);
  }

  textarea,
  button,
  input {
    border: 0;
    outline: 0;
    font-family: 'Poppins', system-ui, sans-serif;
  }

  button {
    cursor: pointer;
  }
`
