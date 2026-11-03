import { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import Footer from "./shared/footer"

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
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
