import * as React from 'react'
import styled from "@emotion/styled"
import { Header } from '@/components/atoms/Header'
import { Footer } from '@/components/atoms/Footer'

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

export const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </Container>
  )
}
