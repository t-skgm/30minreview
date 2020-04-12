import * as React from 'react'
import Link from "next/link"
import styled from "@emotion/styled"
import { consts, colors } from "@/consts"

const Wrapper = styled.header`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${colors.themeColor};
`

const Heading = styled.h1`
  margin-bottom: 0;
  font-weight: bold;
  font-size: 5rem;
  font-family: 'Josefin Sans', sans-serif;

  a {
    color: #fff;
  }
`

const Description = styled.p`
  margin-top: 0.5rem;
  color: #fff;
  font-size: 1rem;
`

export const Header = () => (
  <Wrapper>
    <Heading><Link href="/"><a>{consts.site.title}</a></Link></Heading>
    <Description>{consts.site.description}</Description>
  </Wrapper>
)
