import { FC } from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero/index'
import TopProducts from '../components/top-products'
import Catchphrase from '../components/catchphrase/index'
import Partners from '../components/partners'
import Team from '../components/team'

const IndexPage: FC = () => {
  const breakpoints = useBreakpoint()
  return (
    <Layout>
      <SEO title="Hlavní stránka" />
      <Hero />
      <TopProducts />
      <Catchphrase />
      {breakpoints.sm ? null : <Partners />}
      <Team />
    </Layout>
  )
}
export default IndexPage
