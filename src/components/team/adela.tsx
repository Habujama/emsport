import { motion } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'

const Adela = () => {
  return (
    <>
      <div>
        <StaticImage
          src="../../assets/hero/adela.png"
          alt="Adéla Maternová"
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
          className="text-3xl font-semibold text-justify md:text-left pt-4 sm:pt-10"
        >
          Adéla Maternová
        </motion.h2>
        <h4 className="text-xl font-semibold sm:pt-4 leading-10 mb-2">
          naše pravá noha
        </h4>
        <p>
          Sportovkyně tělem i&nbsp;duší. Když jí děti pustí, ráda se proběhne,
          projede na kole, nebo vyleze na skálu. A&nbsp;vám ochotně poradí.
        </p>
        <p></p>
      </div>
    </>
  )
}

export default Adela
