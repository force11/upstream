import React from "react";
import App from "next/app";
import Head from "next/head";
import PlausibleProvider from "next-plausible";

import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
config.autoAddCss = false;

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (
      <>
        <PlausibleProvider domain="upstream.force11.org">
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <title>Upstream</title>
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/apple-touch-icon.png"
            />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PlausibleProvider>
      </>
    );
  }
}
