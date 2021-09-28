import { FC } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'
import Button from '../button/Button'

const ProductCard: FC = () => (
  <div className="bg-white max-w-sm rounded-md shadow-md p-8">
    <StaticImage
      src="../../../assets/products/gtgrade.png"
      alt="GT Grade"
      title="GT Grade"
      height={200}
      placeholder="blurred"
      layout="fixed"
      className="mb-4 mx-auto"
    />
    <motion.h4
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-bold text-center leading-7 pb-2"
    >
      GT Grade Carbon Expert
    </motion.h4>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="leading-5"
    >
      Osedlej si nejnovější gravel od GT který vyhrál ocenění Gravel Bike roku
      2020.
    </motion.p>
    <Button className="flex bg-blue-300 mx-auto mt-3">Ukaž mi ho!</Button>
  </div>
)
export default ProductCard
