import { FC } from 'react'
import { motion } from 'framer-motion'
import { useStaticQuery, graphql } from 'gatsby'

import ProductCard from '../shared/product-card'
import PageTitle from '../shared/page-title'

const Shop: FC = () => {
  const { allContentfulEntry } = useStaticQuery(graphql`
    query {
      allContentfulEntry {
        edges {
          node {
            ... on ContentfulTopProducts {
              id
              titulek
              popis {
                raw
              }
              cena
              fotogalerie {
                gatsbyImageData(
                  height: 200
                  placeholder: BLURRED
                  formats: AUTO
                )
              }
              titulnFoto {
                gatsbyImageData(
                  height: 200
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
    <div className="flex flex-col p-4">
      <PageTitle
        title="Nabídka"
        description="Prohlídni si výběr našich nejoblíbenějších kousků. Nebo přijď k nám na prodejnu,
        tam jich je mnohem víc!"
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-x-4 gap-y-4 my-16">
        {allContentfulEntry.edges.map(
          ({ node: { titulek, popis, cena, id, titulnFoto } }) => {
            return popis !== undefined ? (
              <ProductCard
                title={titulek}
                id={id}
                description={popis}
                price={cena}
                titlePhoto={titulnFoto}
                key={id}
                buttonText="Chci vědět víc!"
              />
            ) : null
          }
        )}
      </div>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-3xl text-blue-300 text-center   font-medium pb-4"
      >
        Nenašel jsi, co hledáš? Dej nám vědět, seženeme ti to!
      </motion.h2>
      <p className="text-2xl text-center pb-32">
        Napiš nám mail na{' '}
        <a
          href="mailto:info@emsportslany.cz"
          className="underline hover:text-blue-300"
        >
          info@emsportslany.cz
        </a>{' '}
        nebo zavolej na&nbsp;
        <a href="tel:775 710 011" className="underline hover:text-blue-300">
          775&nbsp;710&nbsp;011
        </a>
        .
      </p>
    </div>
  )
}

export default Shop
