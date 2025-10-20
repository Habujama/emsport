import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero/index'
import Catchphrase from '../components/catchphrase/index'
import Partners from '../components/partners'
import Team from '../components/team'
import Notification from '../components/shared/notification'
import HeadComponent from '../components/head'

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
      <Hero />
      {NotificationContent ? (
        <Notification
          title={NotificationContent.titulek}
          description={NotificationContent.krtkText}
        />
      ) : (
        'Ale ne, tady něco chybí!'
      )}
      <Catchphrase />
      {breakpoints.sm || breakpoints.md ? null : <Partners />}
      <Team />
    </Layout>
  )
}
export default IndexPage

export function Head() {
  return (
    <HeadComponent
      title="Hlavní stránka"
      description="Kola, servis, lyže, bajky pro všechny sporťáky."
      meta={[{ name: 'robots', content: 'index,follow' }]}
    />
  )
}
