import * as React from 'react'
import Link from "next/link"
import styled from "@emotion/styled"
import { consts } from "@/consts"

const Wrapper = styled.header`
`

const Heading = styled.h1`
  font-weight: bold;
  font-size: 2rem;
`

export const Header = () => (
  <Wrapper>
    <Heading><Link href="/"><a>{consts.siteTitle}</a></Link></Heading>
  </Wrapper>
)
