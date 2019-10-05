import { css, Global } from "@emotion/core";
import Head from "next/head";

export default () => (
  <>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
    </Head>
    <Global
      styles={css`
        :root {
          --primary: orangered;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          font-family: Roboto;
          background: #fafafa;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
      `}
    />
  </>
);
