import { FC } from 'react'
import { motion } from 'framer-motion'
import { useStaticQuery, graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { BLOCKS } from '@contentful/rich-text-types'

import ProductCard from '../shared/product-card'

const Shop: FC = () => {
  const { allContentfulEntry } = useStaticQuery(graphql`
    query {
      allContentfulEntry {
        edges {
          node {
            id
            ... on ContentfulTopProducts {
              id
              titulek
              popis {
                raw
              }
              cena
            }
          }
        }
      }
    }
  `)

  /* eslint-disable react/display-name */
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_, children) => <p className="mb-4">{children}</p>,
    },
  }
  /* eslint-enable react/display-name */

  return (
    <div className="flex flex-col p-4">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-barlow font-semibold text-center uppercase pt-8 sm:pt-12"
      >
        E-SHOP
      </motion.h2>
      <h4 className="text-xl sm:text-2xl pt-8 sm:pt-12 text-center mx-auto leading-10 mb-2">
        Vyber si z naší online nabídky. Nebo přijď k nám na prodejnu,
        rádi&nbsp;tě&nbsp;uvidíme!
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-x-4 gap-y-4 my-16 mx-auto">
        {allContentfulEntry.edges.map(
          ({ node: { titulek, popis, cena, id } }) => (
            <ProductCard
              title={titulek}
              description={renderRichText(popis, options)}
              price={cena}
              key={id}
              buttonText="Chci vědět víc!"
            />
          )
        )}
      </div>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-3xl text-blue-300 text-center font-barlow font-medium pb-4"
      >
        Nenašel jsi, co hledáš? Dej nám vědět, seženeme ti to!
      </motion.h2>
      <p className="text-2xl text-center pb-32">
        Napiš nám{' '}
        <a
          href="mailto:info@emsportslany.cz"
          className="underline hover:text-blue-300"
        >
          mail
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
