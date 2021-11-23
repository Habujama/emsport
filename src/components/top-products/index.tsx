import { FC } from 'react'
import { motion } from 'framer-motion'
import { useStaticQuery, graphql } from 'gatsby'

import ProductCard from '../shared/product-card/'
import Button from '../shared/button/Button'

const TopProducts: FC = () => {
  const { allContentfulEntry } = useStaticQuery(graphql`
    query MyQuery {
      allContentfulEntry(limit: 4) {
        edges {
          node {
            id
            ... on ContentfulTopProducts {
              id
              cena
              titulek
              popis {
                raw
              }
              titulnFoto {
                gatsbyImageData(
                  height: 150
                  placeholder: BLURRED
                  formats: AUTO
                )
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className="mb-12">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-2xl sm:text-4xl font-bold text-center sm:pt-16 mb-8 p-4 rounded-md sm:rounded-none sm:p-0"
      >
        To nejlepší pro tebe
      </motion.h2>
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-center justify-center">
        {allContentfulEntry.edges.map(
          ({ node: { titulek, cena, id, titulnFoto } }) => {
            return titulek !== undefined ? (
              <ProductCard
                title={titulek}
                price={cena}
                titlePhoto={titulnFoto}
                key={id}
                buttonText="Ukaž mi ho!"
                buttonTo="/e-shop"
              />
            ) : null
          }
        )}
      </div>
      <div className="flex">
        <Button
          to="/e-shop"
          buttonStyle="primary"
          size="large"
          className="mt-8 mx-auto"
        >
          Ukaž mi víc
        </Button>
      </div>
    </div>
  )
}

export default TopProducts
