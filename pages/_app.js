import React from 'react'
import { withRouter } from 'next/router'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'

import createStore from 'store/createStore'
import App, { Container } from 'next/app'
import Layout from 'components/Layout'

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    }
  }

  render () {
    const { Component, pageProps, store, router } = this.props
    const { asPath, pathname, query } = router
    const url = {
      asPath,
      pathname,
      query
    }
    return (
      <Container>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} url={url} />
          </Layout>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(createStore)(withRouter(MyApp))
