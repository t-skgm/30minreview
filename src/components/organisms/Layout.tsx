import * as React from 'react'
import { Head } from '@/components/atoms/Head'
import { Header } from '@/components/atoms/Header'
import { Footer } from '@/components/atoms/Footer'

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
