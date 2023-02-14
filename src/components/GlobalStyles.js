import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
      box-sizing:boerder-box;
  }
  body {
    font-family: 'Noto Sans KR';
    font-weight: 400;
    font-size: 120px;
  }
  a {
    text-decoration:none;
    color:inherit;
  }
  button {
    padding:0;
    background: inherit;
    border:none;
    border-radius:0;
    box-shadow:none;
    overflow:visible;
    cursor: pointer;
  }
`;

export default GlobalStyles;
