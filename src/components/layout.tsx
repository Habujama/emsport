/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import { FC } from 'react'
import { useStaticQuery, graphql } from "gatsby"

import Header from "./shared/header"
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
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="mx-auto max-w-screen-xl sm:px-12 px-4 text-lg">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
