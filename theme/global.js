import { Global, css } from "@emotion/core";

export default () => (
  <Global
    styles={css`
      :root {
        --primary: orangered;
      }

      html,
      body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
      }

      a {
        color: inherit;
        text-decoration: none;
      }
    `}
  />
);
