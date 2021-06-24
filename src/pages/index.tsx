import {FC} from "react"
import { Link } from "gatsby"
import className from 'classnames'


import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"

const IndexPage:FC = () => {
  const linkCss = className(
    'underline hover:no-underline'
  )

return (
  <Layout>
    <SEO title="Hlavní stránka" />
    <Hero />
    <Hero />
    <Hero />
    <p>
      <Link to="/page-2/" className={linkCss}>Go to page 2</Link> <br />
      <Link to="/using-typescript/" className={linkCss}>Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)
}
export default IndexPage
