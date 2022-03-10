import { FC } from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero/index'
import TopProducts from '../components/top-products'
import Catchphrase from '../components/catchphrase/index'
import Partners from '../components/partners'
import Team from '../components/team'
import Notification from '../components/shared/notification'

const IndexPage: FC = () => {
  const breakpoints = useBreakpoint()

  return (
    <Layout>
      <SEO title="Hlavní stránka" />
      <Hero />
      <Notification />
      <TopProducts />
      <Catchphrase />
      {breakpoints.sm || breakpoints.md ? null : <Partners />}
      <Team />
    </Layout>
  )
}
export default IndexPage
