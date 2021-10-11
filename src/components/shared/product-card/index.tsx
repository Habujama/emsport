import { FC } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'
import Button from '../button/Button'

interface Props {
  title?: string
  description?: any
  price?: number
  key?: string
  buttonText?: string
}

const ProductCard: FC<Props> = ({
  title,
  description,
  price,
  key,
  buttonText = 'Ukaž mi ho!',
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    id={key}
    className="bg-white max-w-sm rounded-md shadow-md p-8"
  >
    <div className="relative top-5 bg-blue-100 shadow-md text-gray-800 font-semibold rounded-full items-center w-32">
      <p className="text-center p-4">{price}&nbsp;Kč</p>
    </div>
    <StaticImage
      src="../../../assets/products/gtgrade.png"
      alt="GT Grade"
      title="GT Grade"
      height={200}
      placeholder="blurred"
      layout="fixed"
      className="mb-4 mx-auto"
    />
    <h4 className="text-xl text-blue-400 text-center font-bold leading-7 pb-2">
      {title}
    </h4>
    <p className="leading-5 text-gray-800">{description}</p>
    <Button className="flex mx-auto mt-6" type="secondary">
      {buttonText}
    </Button>
  </motion.div>
)
export default ProductCard
