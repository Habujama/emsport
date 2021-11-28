import { FC } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Shop from '../components/shop'

const Nabidka: FC = () => {
  return (
    <Layout>
      <SEO title="Nabídka" />
      <Shop />
    </Layout>
  )
}
export default Nabidka
