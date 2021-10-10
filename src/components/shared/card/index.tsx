import { FC } from 'react'
import { motion } from 'framer-motion'
import classNames from 'classnames'

interface Props {
  cardTitle: any
  cardParagraph?: string
  cardBackgroundColor?: string
  margin?: string
}

const Card: FC<Props> = ({
  cardTitle,
  cardParagraph,
  cardBackgroundColor = 'bg-gray-500',
  margin,
  children,
}) => {
  const cardCss = classNames(
    'flex flex-col p-6 rounded-md shadow-lg m-4',
    cardBackgroundColor,
    margin
  )
  const phraseCss = classNames('text-2xl font-bold self-center')

  return (
    <motion.div
      className={cardCss}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <span className="flex mb-4 mx-auto">
        <p className={phraseCss}>{cardTitle}</p>
      </span>
      <p>{cardParagraph}</p>
      {children}
    </motion.div>
  )
}

export default Card
