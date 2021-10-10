import { FC } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'
import Button from '../button/Button'

interface Props {
  buttonText?: string
}

const ProductCard: FC<Props> = ({ buttonText = 'Ukaž mi ho!' }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="bg-white max-w-sm rounded-md shadow-md p-8"
  >
    <StaticImage
      src="../../../assets/products/gtgrade.png"
      alt="GT Grade"
      title="GT Grade"
      height={200}
      placeholder="blurred"
      layout="fixed"
      className="mb-4 mx-auto"
    />
    <h4 className="font-bold text-center leading-7 pb-2">
      GT Grade Carbon Expert
    </h4>
    <p className="leading-5 text-gray-800">
      Osedlej si nejnovější gravel od GT, který vyhrál ocenění Gravel Bike roku
      2020.
    </p>
    <Button className="flex mx-auto mt-6" type="secondary">
      {buttonText}
    </Button>
  </motion.div>
)
export default ProductCard
