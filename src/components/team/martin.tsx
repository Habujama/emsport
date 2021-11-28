import { FC } from 'react'
import { motion } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'

const Martin: FC = () => {
  return (
    <>
      <StaticImage
        src="../../assets/hero/koula-tym.png"
        alt="Martin Koula"
        height={250}
        placeholder="blurred"
        layout="fixed"
        className="self-center mx-auto"
      />
      <div className="justify-between mx-auto pb-6">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-barlow font-semibold  pt-4 sm:pt-10 text-justify md:text-left"
        >
          Martin Koula
        </motion.h2>
        <h4 className="text-xl font-semibold sm:pt-4 leading-10 mb-2">
          mechanik, silniční a&nbsp;bajkový závodník, člen týmu XEELO
          Cycling&nbsp;Team
        </h4>
        <p>
          Postará se&nbsp;o&nbsp;vaše kolo stejně, jako se stará o&nbsp;kola
          profesionálních závodníků. Poradí vám s&nbsp;jeho přestavbou
          i&nbsp;výběrem.
        </p>
      </div>
    </>
  )
}

export default Martin
