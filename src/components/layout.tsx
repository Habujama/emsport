import { FC } from 'react'
import { 
  motion, 
  useViewportScroll,
  useSpring,
  useTransform
} from 'framer-motion'
import { useStaticQuery, graphql } from "gatsby"


import Header from "./shared/header"
import Footer from './shared/footer'

const Layout:FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { scrollYProgress } = useViewportScroll()
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  return (
    <div className="bg-gradient-1">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />   
        <div className="mx-auto max-w-screen-xl sm:px-12 px-4 text-lg bg-trail">
        <svg>
            <motion.path
              strokeWidth="3"
              stroke="white"
              strokeLinecap="round"
              d="M 60 -10 V 300"
              style={{ pathLength }} 
            />
        </svg> 
          <main>{children}</main>
        </div>
        <Footer />
    </div>
  )
}

export default Layout
