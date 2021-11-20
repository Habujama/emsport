import { FC } from 'react'
import { useMedia } from 'react-use'
import theme from 'tailwindcss/defaultTheme'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero/index'
import TopProducts from '../components/top-products'
import Catchphrase from '../components/catchphrase/index'
import Partners from '../components/partners'
import Team from '../components/team'

const { screens } = theme

const IndexPage: FC = () => {
  const isNotMobile = useMedia(`(min-width: ${screens.lg})`)
  return (
    <Layout>
      <SEO title="Hlavní stránka" />
      <Hero />
      <TopProducts />
      <Catchphrase />
      {isNotMobile && <Partners />}
      <Team />
    </Layout>
  )
}
export default IndexPage
