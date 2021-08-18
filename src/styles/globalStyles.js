import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Cairo", sans-serif;
}

body {
  color: ${(props) => props.theme.colors.font};
  line-height: 1.5;

}

h1, h2, h3, h4 {
  font-weight: lighter;
}

a {
  text-decoration: none;
}

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  transition: background-color 5000s ease-in-out 0s;
  -webkit-text-fill-color: #fff;
}

`;
