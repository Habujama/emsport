import { FC } from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { StaticImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'

const Hero: FC = () => {
  const breakpoints = useBreakpoint()
  return (
    <div className="flex flex-col lg:flex-row space-between justify-center">
      <div className="flex flex-col max-w-md p-4 sm:p-0 mx-auto lg:mx-0 justify-center z-10">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold sm:pt-16"
        >
          Kola, servis, lyže, bajky pro&nbsp;všechny sporťáky.
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-xl lg:text-3xl sm:mt-8 mt-4 sm:mb-16 mb-6"
        >
          Pro tvoje kolo máme špičkový mechaniky, pro tebe fešácký doplňky
          a&nbsp;funkční oblečení.
        </motion.h2>
      </div>
      {breakpoints.md ? null : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="xl:ml-44 flex overflow-x-scroll overflow-y-hidden sm:overflow-x-visible mb-10 md:mb-0"
        >
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 110 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <StaticImage
              src="../../assets/hero/emsportak-hero.png"
              alt="Monika Malečková"
              title="Monika Malečková"
              width={250}
              placeholder="blurred"
              layout="fixed"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 90, y: -30, scale: 1.1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <StaticImage
              src="../../assets/hero/tata-tym.png"
              alt="Martin Matoušek"
              title="Martin Matoušek"
              width={220}
              placeholder="blurred"
              layout="fixed"
              className="mt-20 -ml-40 lg:mt-20 lg:-ml-44"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -120 }}
            animate={{ opacity: 1, y: 0, x: -50 }}
            transition={{ duration: 1 }}
          >
            <StaticImage
              src="../../assets/hero/tomas-tym.png"
              alt="Tomáš Řenč"
              title="Tomáš Řenč"
              width={250}
              placeholder="blurred"
              layout="fixed"
              className="mt-10 ml-40 lg:mt-40 lg:mb-8 lg:-ml-40"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default Hero
