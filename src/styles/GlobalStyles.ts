import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Jersey 10';
    src: url('${process.env.PUBLIC_URL}/Jersey10.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'DM Serif Display';
    src: url('${process.env.PUBLIC_URL}/DMSerifDisplay.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'DM Sans';
    src: url('${process.env.PUBLIC_URL}/DMSans.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #FEFEFE;
    --light-yellow-green: #D3D977;
    --dark-green: #29301B;
    --light-pink: #F9CFD9;
    --black: #000000;
  }

  body {
    font-family: 'DM Sans', sans-serif;
    background-color: #FEFEFE;
    background-image: 
      linear-gradient(rgba(41, 48, 27, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(41, 48, 27, 0.1) 1px, transparent 1px);
    background-size: 35px 35px;
    color: #000000;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'DM Serif Display', serif;
  }

  .jersey-font {
    font-family: 'Jersey 10', 'Arial Black', sans-serif;
    font-weight: bold;
    letter-spacing: 0.05em;
  }

  .dm-sans {
    font-family: 'DM Sans', sans-serif;
  }

  .dm-serif {
    font-family: 'DM Serif Display', serif;
  }
`; 