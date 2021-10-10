import { FC } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Rental from '../components/rental'

const Pujcovna: FC = () => {
  return (
    <Layout>
      <SEO title="Půjčovna sportovního vybavení" />
      <Rental />
    </Layout>
  )
}
export default Pujcovna
