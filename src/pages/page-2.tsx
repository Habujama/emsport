import { FC } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage:FC = () => (
  <Layout>
    <SEO title="Page two" />
    <h1 className="font-bold text-2xl mb-4">Hi from the second page</h1>
    <Link to="/" className="underline hover:no-underline">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
