import { useStaticQuery, graphql } from "gatsby"
import { useMedia } from "react-use"
import theme from "tailwindcss/defaultTheme"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/index"
import Catchphrase from "../components/catchphrase/index"
import Partners from "../components/partners"
import Team from "../components/team"
import Notification from "../components/shared/notification"

const { screens } = theme

const IndexPage = () => {
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

  const isMobile = useMedia(`(max-width: ${screens.md})`)

  const NotificationContent = allContentfulNotifikace.edges[0].node

  return (
    <Layout>
      <SEO title="Hlavní stránka" />
      <Hero />
      {NotificationContent && (
        <Notification
          title={NotificationContent.titulek}
          description={NotificationContent.krtkText}
        />
      )}
      <Catchphrase />
      {!isMobile && <Partners />}
      <Team />
    </Layout>
  )
}
export default IndexPage
