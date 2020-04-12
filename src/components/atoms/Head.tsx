import * as React from 'react'
import { default as NextHead } from 'next/head'

export const Head: React.FC = ({ children }) => (
  <NextHead>
    <title property="title">30min review</title>
    <link
      rel="stylesheet"
      href="https://css.zeit.sh/v1.css"
      type="text/css"
    />
    {children}
  </NextHead>
)
