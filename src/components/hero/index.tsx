import { FC, Fragment } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'
import { useMedia } from 'react-use'
import theme from 'tailwindcss/defaultTheme'

const { screens } = theme

const Hero: FC = () => {
  const isNotMobile = useMedia(`(min-width: ${screens.md})`)

  return (
    <>
      <div className="flex flex-col sm:grid grid-cols-2 lg:gap-x-20 justify-between">
        <div className="flex flex-col max-w-md p-4 sm:p-0 mx-auto lg:mx-0 justify-center">
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
        {isNotMobile ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col sm:col-start-2"
          >
            <Fragment />
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 80 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <StaticImage
                src="../../assets/hero/monika-tym.png"
                alt="Monika Malečková"
                title="Monika Malečková"
                width={230}
                placeholder="blurred"
                layout="fixed"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 100, scale: 1.1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <StaticImage
                src="../../assets/hero/tata-tym.png"
                alt="Martin Matoušek"
                title="Martin Matoušek"
                width={220}
                placeholder="blurred"
                layout="fixed"
                className="-mt-0 lg:-mt-12 -ml-4 lg:-ml-44"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 110 }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              <StaticImage
                src="../../assets/hero/koula-tym.png"
                alt="Martin Koula"
                title="Martin Koula"
                width={250}
                placeholder="blurred"
                layout="fixed"
                className="-mt-40 lg:-mt-64 -mr-0 md:-mr-56 -ml-12 lg:-ml-0"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0, x: 100 }}
              transition={{ duration: 1 }}
            >
              <StaticImage
                src="../../assets/hero/tomas-tym.png"
                alt="Tomáš Řenč"
                title="Tomáš Řenč"
                width={250}
                placeholder="blurred"
                layout="fixed"
                className="-mt-48 lg:-mt-52 -ml-24 mb-8"
              />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="self-center mb-16"
          >
            <StaticImage
              src="../../assets/emsportak.png"
              alt="eM SPORT Slaný"
              title="eM SPORT Slaný"
              height={250}
              placeholder="blurred"
              layout="fixed"
            />
          </motion.div>
        )}
      </div>
    </>
  )
}

export default Hero
