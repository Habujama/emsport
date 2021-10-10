import { FC } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Shop from '../components/shop'

const EShop: FC = () => {
  return (
    <Layout>
      <SEO title="E-shop" />
      <Shop />
    </Layout>
  )
}
export default EShop
