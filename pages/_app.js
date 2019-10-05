import App from "next/app";
import Link from "next/link";
import styled from "@emotion/styled";

import GlobalStyles from "../theme/global";

const NavBar = styled.div`
  height: 64px;
  background: orangered;
  width: 100;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 24px;
  font-size: 24px;
`;

class Root extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <GlobalStyles />
        <NavBar>
          <Link href="/">
            <a>M10$</a>
          </Link>
        </NavBar>
        <Component {...pageProps} />
      </>
    );
  }
}

export default Root;
