import * as React from 'react'
import { Header } from '@/components/atoms/Header'
import { Footer } from '@/components/atoms/Footer'
import { Container } from 'semantic-ui-react'

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Container as="main">
        {children}
      </Container>
      <Footer />
    </>
  )
}
