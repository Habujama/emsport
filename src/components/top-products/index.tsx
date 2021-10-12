import { FC } from 'react'
import { motion } from 'framer-motion'

import ProductCard from '../shared/product-card/'
import Button from '../shared/button/Button'

const TopProducts: FC = () => {
  return (
    <div className="mb-8">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-center sm:pt-16 mb-8"
      >
        To nejlepší pro tebe
      </motion.h2>
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-center justify-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="flex">
        <Button
          to="/e-shop"
          type="primary"
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
