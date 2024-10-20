import { FC } from 'react'
import { motion } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'

const Maty: FC = () => {
  return (
    <>
      <StaticImage
        src="../../assets/hero/tata-tym.png"
        alt="Martin Maty Matoušek"
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
          className="text-3xl   font-semibold pt-4 sm:pt-10 text-justify md:text-left"
        >
          Maty Matoušek
        </motion.h2>
        <h4 className="text-xl font-semibold sm:pt-4 leading-10 mb-2">
          zakladatel a&nbsp;majitel
        </h4>
        <p>
          Běžec a&nbsp;cyklista bez ambicí na&nbsp;vítězství. eMSPORT založil
          před 10 lety, protože měl ke&nbsp;sportu vždy blízko a&nbsp;chtěl k
          němu vést i&nbsp;ostatní. Je také majitelem{' '}
          <a
            href="https://vinotekaslany.cz/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-300"
          >
            Vino&nbsp;Bohemia
          </a>{' '}
          a jejího projektu{' '}
          <a
            href="https://www.mamradvino.cz/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-300"
          >
            Mám&nbsp;rád&nbsp;víno
          </a>
          .
        </p>
      </div>
    </>
  )
}

export default Maty
