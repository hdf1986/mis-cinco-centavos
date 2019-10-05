import App from "next/app";

import GlobalStyles from "../theme/global";

class Root extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <GlobalStyles />
        <Component {...pageProps} />
      </>
    );
  }
}

export default Root;
