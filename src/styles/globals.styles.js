import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  /* Colors */
  :root {
    --gray-100: #16181D;
    --gray-200: #22242C;
    --gray-300: #2D303B;
    --gray-400: #484B5C;
    --gray-500: #878FA6;
    --gray-600: #C7CDDF;
    --gray-700: #DCDEE8;
    --gray-800: #F0F1F7;
    --gray-900: #FFFFFF;
    --primary-100: #40290A;
    --primary-200: #805213;
    --primary-300: #E69523;
    --primary-400: #FFA526;
    --primary-500: #FFBD61;
    --primary-600: #FFDAA5;
    --primary-700: #F3E8C8;
    --error-100: #691026;
    --error-200: #A8193D;
    --error-300: #CF1F4B;
    --error-400: #E82354;
    --error-500: #F52559;
    --error-600: #FB4C78;
    --error-700: #FBB3C5;
    --success-100: #055C42;
    --success-200: #07825D;
    --success-300: #089C70;
    --success-400: #08A878;
    --success-500: #1AC391;
    --success-600: #96D2C0;
    --success-700: #B3FBE5;
  }

  :root {
    --navbar-max-width: 71.25rem;
    --content-max-width: 71.25rem;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Poppins, system-ui;
    background: ${({ theme }) => theme.colors.body.background};
    color: ${({ theme }) => theme.colors.body.text};
    transition: background 320ms ease,
                color 320ms ease,
                border 320ms ease;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  textarea,
  input,
  button {
    border: 0;
    outline: 0;
    font-size: 0.875rem;
    font-family: Poppins, system-ui;

    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }

  h1 {
    font-size: 3rem;
    font-weight: 700;
    &::selection {
      background: ${({ theme }) => theme.colors.body.selection};
    }
  }

  h2 {
    font-size: 2.25rem;
    font-weight: 700;
    &::selection {
      background: ${({ theme }) => theme.colors.body.selection};
    }
  }

  h3 {
    font-size: 1.875rem;
    font-weight: 600;
    &::selection {
      background: ${({ theme }) => theme.colors.body.selection};
    }
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 500;
    &::selection {
      background: ${({ theme }) => theme.colors.body.selection};
    }
  }

  h5 {
    font-size: 1.125rem;
    font-weight: 400;
    &::selection {
      background: ${({ theme }) => theme.colors.body.selection};
    }
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p::selection,
  span::selection,
  input::selection,
  label::selection {
    background: ${({ theme }) => theme.colors.body.selection};
  }

  * {
    box-sizing: border-box;
  }
  
  #__next {
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    overflow-x: hidden;
  }
`
