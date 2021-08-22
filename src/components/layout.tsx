import { FC } from 'react'
/* import { 
  motion, 
  useViewportScroll,
  useSpring,
  useTransform
} from 'framer-motion' */
import { useStaticQuery, graphql } from "gatsby"


import Header from "../components/header"
import Footer from './shared/footer'

const Layout:FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="bg-body-gradient">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />   
        <div className="mx-auto max-w-screen-xl sm:px-12 px-4 text-lg bg-trail">
          <main>{children}</main>
        </div>
        <Footer />
    </div>
  )
}

export default Layout
