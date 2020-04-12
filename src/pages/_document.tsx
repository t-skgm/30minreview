import * as React from "react"
import NextDocument, {
  Html,
  Head,
  Main,
  NextScript
} from "next/document"
import { GlobalStyle } from "@/components/atoms/GlobalStyle"
import { GATag } from "@/components/atoms/GATag"
import { consts } from "@/consts"
import { isProd } from "@/utils/env"

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta key="viewport" name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="theme-color" content="#30bce7" key="themeColor" />
          <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Josefin+Sans&amp;display=swap" />
        </Head>

        <body>
          <Main />
          <NextScript />
          <GlobalStyle />
          {isProd && <GATag trackingId={consts.gaTrackingId} />}
        </body>
      </Html>
    )
  }
}

export default Document
