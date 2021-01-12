import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { Router } from 'next/router'
import { parseCookies } from 'nookies'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      const { 'auth-token': authToken } = parseCookies(ctx)

      if (!authToken) {
        if (ctx.pathname === '/dashboard') {
          redirectUser(ctx, '/login')
        }
      } else {
        if (ctx.pathname === '/') {
          redirectUser(ctx, '/dashboard')
        }
        if (ctx.pathname === '/login') {
          redirectUser(ctx, '/dashboard')
        }
        if (ctx.pathname === '/join') {
          redirectUser(ctx, '/dashboard')
        }
        if (ctx.pathname === '/confirm') {
          redirectUser(ctx, '/dashboard')
        }
      }

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }
}

function redirectUser (ctx, location) {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location })
    ctx.res.end()
  } else {
    Router.push(location)
  }
}
