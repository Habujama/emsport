import {FC} from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import className from 'classnames'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage:FC = () => {
  const linkCss = className(
    'underline hover:no-underline'
  )

return (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../assets/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      className="mb-6"
    />
    <p>
      <Link to="/page-2/" className={linkCss}>Go to page 2</Link> <br />
      <Link to="/using-typescript/" className={linkCss}>Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)
}
export default IndexPage
