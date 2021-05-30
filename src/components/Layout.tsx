import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'

export const Layout: React.FC<{ preview?: boolean }> = ({ preview, children }) => (
  <>
    <Meta />
    <div className="min-h-screen">
      <Alert preview={preview} />
      <main>{children}</main>
    </div>
    <Footer />
  </>
)
