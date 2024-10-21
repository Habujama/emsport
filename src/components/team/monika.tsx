import { FC } from 'react'
import { motion } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'

const Monika: FC = () => {
  return (
    <>
      <div>
        <StaticImage
          src="../../assets/hero/emsportak-hero.png"
          alt="Monika Malečková"
          height={230}
          placeholder="blurred"
          layout="fixed"
          className="self-center mx-auto"
        />
      </div>
      <div className="justify-between mx-auto pb-6">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-3xl   font-semibold text-justify md:text-left pt-4 sm:pt-10"
        >
          Monika Malečková
        </motion.h2>
        <h4 className="text-xl font-semibold sm:pt-4 leading-10 mb-2">
          naše pravá ruka
        </h4>
        <p>
          Ostřílená bajkerka, která to na&nbsp;kole nandá nejednomu chlapovi.
          Dvanáctkrát jela, ujela a dojela jeden z nejdrsnějších českých
          závodů,&nbsp;
          <a
            href="https://loudani.cz/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-300"
          >
            Loudání&nbsp;českou&nbsp;krajinou
          </a>
          .
        </p>
      </div>
    </>
  )
}

export default Monika
