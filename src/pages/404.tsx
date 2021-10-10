import { FC } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSadCry } from '@fortawesome/free-regular-svg-icons'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Button from '../components/shared/button/Button'

const NotFoundPage: FC = () => (
  <Layout>
    <SEO title="404: Kolečko se polámalo" />
    <div className="flex flex-col text-center mb-32">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-barlow font-semibold text-center uppercase py-8 sm:py-16"
      >
        404: Kolečko se polámalo
      </motion.h2>
      <p className="text-center mb-8">
        Tady je něco špatně.{' '}
        <FontAwesomeIcon icon={faSadCry} className="text-3xl" />
      </p>
      <p className="text-center">
        Chceš nám pomoct? Napiš nám, jak ses sem dostal!
      </p>
      <Button href="mailto:info@emsportslany.cz" className=" my-6 mx-auto">
        Jasně, napíšu vám to
      </Button>
    </div>
  </Layout>
)

export default NotFoundPage
