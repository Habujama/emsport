import { motion } from 'framer-motion'
import { useStaticQuery, graphql } from 'gatsby'

import PageTitle from '../shared/page-title'
import WinterRental from './winter-rental'

const Rental = () => {
  const { allContentfulTabulkaZimniPujcovny } = useStaticQuery(graphql`
    query {
      allContentfulTabulkaZimniPujcovny {
        edges {
          node {
            zobrazitZimnPjovnu
          }
        }
      }
    }
  `)

  return (
    <div className="flex flex-col p-4">
      <PageTitle
        title="Půjčovna"
        description="Plánuješ velkej výlet a&nbsp;chybí ti na něj vybavení? Čeká tě víkend na horách a nechceš si kvůli tomu všechno hned kupovat? Půjč si&nbsp;to&nbsp;u&nbsp;nás! Máme lyže, prkna, hůlky i blembáky."
      />
      {allContentfulTabulkaZimniPujcovny.edges[0].node.zobrazitZimnPjovnu && (
        <WinterRental />
      )}

      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-3xl text-blue-300 text-center font-medium pb-8 mt-8"
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
