import { FC } from 'react'
import { motion } from 'framer-motion'
import ProductCard from '../shared/product-card/product-card'

const TopProducts: FC = () => {
  return (
    <div className="mb-8">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-white text-4xl font-bold text-center sm:pt-16 mb-8"
      >
        To nejlepší pro tebe
      </motion.h2>
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default TopProducts
