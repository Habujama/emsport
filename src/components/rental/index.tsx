import { FC } from 'react'
import { motion } from 'framer-motion'

import ProductCard from '../shared/product-card'

const Rental: FC = () => {
  return (
    <div className="flex flex-col p-4">
      <h2 className="text-bold text-5xl text-center mb-4">PŮJČOVNA</h2>
      <h4 className="text-xl sm:text-2xl sm:pt-12 text-center mx-auto leading-10 mb-2">
        Plánuješ velkej výlet a&nbsp;chybí ti na něj vybavení? Máš doma malý
        cyklisty a&nbsp;chybí ti&nbsp;na&nbsp;ně&nbsp;tyč? Tažná tyč? Chceš
        si&nbsp;vyzkoušet elektrokolo a&nbsp;zjistit, že už na jiným kole jezdit
        nebudeš? Půjč si&nbsp;to&nbsp;u&nbsp;nás!
      </h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4 gap-y-4 my-16 mx-auto">
        <ProductCard buttonText="Půjčte mi to!" />
        <ProductCard buttonText="Půjčte mi to!" />
        <ProductCard buttonText="Půjčte mi to!" />
        <ProductCard buttonText="Půjčte mi to!" />
      </div>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-3xl text-blue-300 text-center font-barlow font-medium pb-8"
      >
        Vybral sis? Dej nám vědět!
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-xl text-center font-medium leading-10 mb-12"
      >
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
        </a>{' '}
        co by sis chtěl půjčit, kdy a&nbsp;na jak&nbsp;dlouho.
        <br />
        Zkontrolujeme dostupnost a&nbsp;připravíme ti&nbsp;to.
      </motion.p>
    </div>
  )
}

export default Rental
