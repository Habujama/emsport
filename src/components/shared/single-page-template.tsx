import { useLocation } from '@reach/router'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { motion } from 'framer-motion'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import Layout from '../../components/layout'
import Button from '../../components/shared/button/Button'
import SEO from '../../components/seo'

import Options from '../shared/rich-text-options'
import { useProducts } from '../../hooks/use-products'
import NumberFormat from '../../utils/number-format'

const SinglePageTemplate = () => {
  const currentUrl = useLocation()
  const id = currentUrl.pathname.substring(10, 46)
  const products = useProducts()
  const productsById = products.topProducts.find(
    productsById => productsById.id === id
  )

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <Layout>
      {productsById && (
        <SEO
          title={`${productsById.titulek} | Zonky.cz`}
          description={renderRichText(productsById.popis, Options)}
        />
      )}

      <motion.div
        variants={container}
        className="bg-white rounded-md p-8 md:text-xl text-center text-black-900 shadow-inner mb-14"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-y-4 md:gap-y-0 md:gap-x-6">
          <span className="p-4">
            {productsById?.titulnFoto && (
              <div className="pt-4 rounded-md px-8 shadow-inner border-solid border-2 border-blue-50">
                <GatsbyImage
                  image={getImage(productsById?.titulnFoto)}
                  className="row-start-2 row-span-1 md:row-start-1 md:col-start-1 md:col-span-1 shadow-md rounded-md mt-4"
                />
                {productsById?.cena && (
                  <div className="relative -top-10 bg-blue-100 shadow-lg text-gray-800 font-semibold rounded-full items-center w-32 z-10">
                    <p className="text-center py-4">
                      {NumberFormat(productsById.cena)}
                    </p>
                  </div>
                )}
              </div>
            )}
          </span>

          <span className="row-start-1 row-span-1 md:col-start-2 md:col-span-1">
            <h2 className="text-2xl md:text-4xl font-bold text-center md:pt-16 mb-8">
              {productsById?.titulek}
            </h2>
            {productsById && (
              <p className="text-black-500">
                {renderRichText(productsById.popis, Options)}
              </p>
            )}
          </span>
        </div>
        {productsById?.detail && (
          <div className="text-left text-black-500 bg-gray-200 shadow-inner p-8 rounded-md my-4 md:my-8">
            {renderRichText(productsById.detail, Options)}
          </div>
        )}
        <motion.div
          className="flex space-x-4 mt-2 md:mt-8"
          variants={container}
        >
          {productsById?.fotogalerie &&
            productsById.fotogalerie.map(foto => (
              <motion.span
                key={foto}
                className="transform hover:scale-110 shadow-inner hover:shadow-md border-solid border-2 border-blue-50 rounded-md py-6"
              >
                <GatsbyImage image={getImage(foto)} />
              </motion.span>
            ))}
        </motion.div>
        <motion.div className="flex flex-col">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-2xl text-blue-300 font-barlow font-medium pr-2"
          >
            Vybral sis ho? Dej nám vědět!
          </motion.h3>
          <span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-xl text-center font-medium leading-10"
          >
            Napiš nám mail&nbsp;na{' '}
            <a
              href="mailto:info@emsportslany.cz"
              className="underline hover:text-blue-300"
            >
              info@emsportslany.cz
            </a>{' '}
            nebo zavolej na&nbsp;
            <a href="tel:775 710 011" className="underline hover:text-blue-300">
              +420&nbsp;775&nbsp;710&nbsp;011
            </a>
          </span>
        </motion.div>
      </motion.div>

      <div className="max-w-xs">
        <Button className="block mx-auto mb-12" buttonStyle="secondary" to="/">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-4" />
          Zpátky
        </Button>
      </div>
    </Layout>
  )
}

export default SinglePageTemplate
