import { FC } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero/index'
import TopProducts from '../components/top-products'
import Catchphrase from '../components/catchphrase/index'
import Team from '../components/team'

const IndexPage: FC = () => {
  return (
    <Layout>
      <SEO title="Hlavní stránka" />
      <Hero />
      <TopProducts />
      <Catchphrase />
      <Team />
    </Layout>
  )
}
export default IndexPage
