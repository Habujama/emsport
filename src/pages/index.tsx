import { FC } from 'react'
/* import { Link } from "gatsby"
import className from 'classnames' */

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero/index'

const IndexPage: FC = () => {
  /*  const linkCss = className(
    'underline hover:no-underline'
  ) */

  return (
    <Layout>
      <SEO title="Hlavní stránka" />
      <Hero />
    </Layout>
  )
}
export default IndexPage
