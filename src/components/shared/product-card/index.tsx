import { FC } from 'react'
import { motion } from 'framer-motion'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Button from '../button/Button'
import NumberFormat from '../../../utils/number-format'

interface Props {
  title?: string
  description?: any
  price?: number
  titlePhoto?: any
  buttonText?: string
  buttonTo?: string
}

const ProductCard: FC<Props> = ({
  title,
  description,
  price,
  titlePhoto,
  buttonText = 'Ukaž mi ho!',
  buttonTo,
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="bg-white max-w-sm rounded-md shadow-md p-8"
  >
    <div className="relative top-0 bg-blue-100 shadow-md text-gray-800 font-semibold rounded-full items-center w-32 z-10">
      <p className="text-center p-4">{NumberFormat(price)}</p>
    </div>
    <div className="flex">
      <GatsbyImage
        image={getImage(titlePhoto)}
        alt={title}
        className="mx-auto"
      />
    </div>
    <h4 className="text-xl text-blue-400 text-center font-bold leading-7 py-2">
      {title}
    </h4>
    <p className="leading-5 text-gray-800">{description}</p>
    <Button
      className="block mx-auto mt-6"
      buttonStyle="secondary"
      to={buttonTo}
    >
      {buttonText}
    </Button>
  </motion.div>
)
export default ProductCard
