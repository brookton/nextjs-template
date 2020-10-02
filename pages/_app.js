import Head from 'next/head'
import App from 'next/app'
import Router from 'next/router'
import { initGA, logPageView } from '../utils/analytics'
import '../styles/globals.css'


const Noop = ({ children }) => children

export default class MyApp extends App {
  componentDidMount() {
    initGA()
    logPageView()
    Router.events.on('routeChangeComplete', logPageView)
  }

  render() {
    const { Component, pageProps } = this.props
    const Layout = Component.Layout || Noop

    return (
      <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Next.js PWA Example</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </>
    )
  }
}

