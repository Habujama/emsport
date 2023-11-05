import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero/index'
import TopProducts from '../components/top-products'
import Catchphrase from '../components/catchphrase/index'
import Partners from '../components/partners'
import Team from '../components/team'
import Notification from '../components/shared/notification'

const IndexPage = () => {
  const breakpoints = useBreakpoint()

  const { allContentfulNotifikace } = useStaticQuery(graphql`
    query {
      allContentfulNotifikace {
        edges {
          node {
            krtkText {
              raw
            }
            titulek
          }
        }
      }
    }
  `)

  const NotificationContent = allContentfulNotifikace.edges[0].node

  return (
    <Layout>
      <SEO title="Hlavní stránka" />
      <Hero />
      {NotificationContent ? (
        <Notification
          title={NotificationContent.titulek}
          description={NotificationContent.krtkText}
        />
      ) : (
        'neeee'
      )}
      <TopProducts />
      <Catchphrase />
      {breakpoints.sm || breakpoints.md ? null : <Partners />}
      <Team />
    </Layout>
  )
}
export default IndexPage
