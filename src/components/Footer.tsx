import { Container } from './Container'
import { blogConfig } from '../lib/constants'

export const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2 text-center p-4">
      <Container>
        <address className="not-italic">
          &copy;{' '}
          <a href={`https://twitter.com/${blogConfig.twitter}`} target="_blank" rel="noopener noreferrer">
            {blogConfig.twitter}
          </a>{' '}
          2021
        </address>
      </Container>
    </footer>
  )
}
