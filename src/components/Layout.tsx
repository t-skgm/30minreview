import {Footer} from '../components/Footer'
import {Meta} from '../components/Meta'

export const Layout: React.FC<{ preview?: boolean }> = ({ preview, children }) => (
  <>
    <Meta />
    <div className="min-h-screen">
      <main>{children}</main>
    </div>
    <Footer />
  </>
)
