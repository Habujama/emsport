import { FC } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Service from '../components/servis/index'

const Servis: FC = () => {
  return (
    <Layout>
      <SEO title="Servis kol a lyží" />
      <Service />
    </Layout>
  )
}
export default Servis
