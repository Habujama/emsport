import { motion } from 'framer-motion'
import { useStaticQuery, graphql } from 'gatsby'

import PageTitle from '../shared/page-title'
import ProductCard from '../shared/product-card'
import WinterRental from './winter-rental'

const Rental = () => {
  const { allContentfulEntry } = useStaticQuery(graphql`
    query {
      allContentfulEntry {
        edges {
          node {
            id
            ... on ContentfulPujcovna {
              id
              cenaZaDen
              popis {
                raw
              }
              titulek
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
        title="Půjčovna"
        description="Plánuješ velkej výlet a&nbsp;chybí ti na něj vybavení? Máš doma malý
        cyklisty a&nbsp;chybí ti&nbsp;na&nbsp;ně&nbsp;tyč? Tažná tyč? Chceš
        si&nbsp;vyzkoušet elektrokolo a&nbsp;zjistit, že už na jiným kole jezdit
        nebudeš? Půjč si&nbsp;to&nbsp;u&nbsp;nás!"
      />
      <WinterRental />
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4 gap-y-4 my-16 mx-auto">
        {allContentfulEntry.edges.map(
          ({ node: { titulek, cenaZaDen, popis, id, titulnFoto } }) => {
            return popis !== undefined ? (
              <ProductCard
                title={titulek}
                id={id}
                description={popis}
                price={cenaZaDen}
                titlePhoto={titulnFoto}
                key={id}
                showButton={false}
              />
            ) : null
          }
        )}
      </div>

      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-3xl text-blue-300 text-center font-barlow font-medium pb-8"
      >
        Vybral sis? Dej nám vědět!
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-xl text-center font-medium leading-10 mb-12"
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
          775&nbsp;710&nbsp;011
        </a>
        , co by sis chtěl půjčit, kdy a&nbsp;na jak&nbsp;dlouho.
        <br />
        Zkontrolujeme dostupnost a&nbsp;připravíme ti&nbsp;to.
      </motion.p>
    </div>
  )
}

export default Rental
