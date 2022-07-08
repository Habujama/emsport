import { motion } from 'framer-motion'
import { useStaticQuery, graphql } from 'gatsby'

import ProductCard from '../shared/product-card/'
import Button from '../shared/button/Button'

const TopProducts = () => {
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
      <div className="grid grid-cols-1 sm:grid-cols-4 grid-rows-4 sm:grid-rows-1 sm:gap-x-4 gap-y-4">
        {allContentfulEntry.edges.map(
          ({ node: { titulek, cena, id, popis, titulnFoto } }) => {
            return titulek !== undefined ? (
              <ProductCard
                title={titulek}
                price={cena}
                description={popis}
                titlePhoto={titulnFoto}
                key={id}
                buttonText="Ukaž mi ho!"
                id={id}
              />
            ) : null
          }
        )}
      </div>
      <div className="flex">
        <Button
          to="/nabidka"
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
