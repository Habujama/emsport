import { FC, HTMLAttributes } from 'react'
import { motion } from 'framer-motion'

interface Props extends HTMLAttributes<HTMLElement> {
  title: string
  description?: string
}

export const PageTitle: FC<Props> = ({ title, description }) => {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl font-barlow font-semibold text-center uppercase pt-8 sm:pt-12"
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.h4
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-xl sm:text-2xl pt-8 sm:pt-12 text-center mx-auto mb-2"
        >
          {description}
        </motion.h4>
      ) : null}
    </>
  )
}

export default PageTitle
