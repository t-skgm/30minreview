import * as React from 'react'
import { Header } from '@/components/atoms/Header'
import { Footer } from '@/components/atoms/Footer'

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
