import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { GlobalStyles } from 'twin.macro'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="ja">
        <Head />
        <GlobalStyles />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
