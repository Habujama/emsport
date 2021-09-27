import { FC } from 'react'
import classNames from 'classnames'
import { StaticImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'
import { useMedia } from 'react-use'
import theme from 'tailwindcss/defaultTheme'

const { screens } = theme

const Hero: FC = () => {
  const isNotMobile = useMedia(`(min-width: ${screens.lg})`)
  const imageCss = classNames('flex flex-col')

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col max-w-md p-4 sm:p-0 mx-auto lg:mx-0 justify-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-white text-4xl font-bold sm:pt-16"
          >
            Kola, servis, lyže, bajky pro&nbsp;všechny sporťáky.
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white text-xl lg:text-3xl sm:mt-8 mt-4 sm:mb-16 mb-6"
          >
            Pro tvoje kolo máme špičkový mechaniky, pro tebe fešácký doplňky
            a&nbsp;funkční oblečení.
          </motion.h2>
        </div>
        {isNotMobile ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.5 }}
            className="flex flex-col"
          >
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 150 }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              <StaticImage
                src="../../assets/hero/emsportacka-tym.png"
                alt="Monika Malečková"
                title="Monika Malečková"
                height={350}
                placeholder="blurred"
                layout="fixed"
                className={`${imageCss} lg:-ml-12 -mt-48`}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <StaticImage
                src="../../assets/hero/koula-tym.png"
                alt="Martin Koula"
                title="Martin Koula"
                height={334}
                placeholder="blurred"
                layout="fixed"
                className={`${imageCss} -mt-12 lg:-mt-16 -ml-12 lg:-ml-56`}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 150 }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              <StaticImage
                src="../../assets/hero/tata-tym.png"
                alt="Martin Matoušek"
                title="Martin Matoušek"
                height={282}
                placeholder="blurred"
                layout="fixed"
                className={`${imageCss} -mr-56 -mt-64`}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <StaticImage
                src="../../assets/hero/tomas-tym.png"
                alt="Tomáš Řenč"
                title="Tomáš Řenč"
                height={320}
                placeholder="blurred"
                layout="fixed"
                className={`${imageCss} -mt-56 -ml-12 mb-8`}
              />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="self-center"
          >
            <StaticImage
              src="../../assets/hero/emsportacka-tym.png"
              alt="Monika Malečková"
              title="Monika Malečková"
              height={200}
              placeholder="blurred"
              layout="fixed"
              className={imageCss}
            />
          </motion.div>
        )}
      </div>
    </>
  )
}

export default Hero
