import * as React from "react"
import Head from "next/head"

type Props = {
  trackingId: string
}

export const GATag: React.FC<Props> = ({ trackingId }) => {
  return (
    <Head>
      <script
        key="googleAnalyticsTag1"
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
        async
      />
      <script
        key="googleAnalyticsTag2"
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', ${trackingId});
`
        }}
      />
    </Head>
  )
}
