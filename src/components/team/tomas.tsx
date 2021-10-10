import { FC } from 'react'
import { motion } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'

const Tomas: FC = () => {
  return (
    <>
      <StaticImage
        src="../../assets/hero/tomas-tym.png"
        alt="Tomáš Řenč"
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
          Tomáš Řenč
        </motion.h2>
        <h4 className="text-xl font-semibold sm:pt-4 leading-10 mb-2">
          mechanik, trenér a&nbsp;triatlonista
        </h4>
        <p>
          Iron Man, mistr ČR v&nbsp;dlouhém a&nbsp;polovičním triatlonu
          a&nbsp;vicemistr Evropy v&nbsp;dlouhém triatlonu. Když nezávodí
          a&nbsp;netrénuje, tak si hraje s&nbsp;koly v&nbsp;naší dílně, nebo se
          stará o&nbsp;svoje dvě&nbsp;děti a&nbsp;manželku.
        </p>
      </div>
    </>
  )
}

export default Tomas
