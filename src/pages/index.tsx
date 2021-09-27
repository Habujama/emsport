import { FC } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero/index'
import Catchphrase from '../components/catchphrase/index.tsx'

const IndexPage: FC = () => {
  return (
    <Layout>
      <SEO title="Hlavní stránka" />
      <Hero />
      <Catchphrase />
    </Layout>
  )
}
export default IndexPage
