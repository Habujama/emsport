import { FC } from 'react'
import { motion } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'

const Catchphrase: FC = () => (
  <div className="flex flex-col-reverse md:flex-row p-4">
    <div className="self-center md:mr-12">
      <StaticImage
        src="../../assets/emsportak.png"
        alt=""
        height={350}
        placeholder="blurred"
        layout="fixed"
      />
    </div>
    <div className="justify-between mx-auto mb-16">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-white text-2xl font-barlow font-medium sm:pt-16 text-justify md:text-left"
      >
        Přímo na prodejně pro tebe máme víc jak{' '}
        <strong>100&nbsp;modelů&nbsp;kol</strong> - silničky, gravely, horský
        kola,elektrokola, koloběžky, trekkingový i&nbsp;dětský.&nbsp;
      </motion.h2>
      <motion.ul className="sm:my-8 my-4 space-y-3">
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-white"
        >
          Nevybereš si? Sežneme ti to!
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-white"
        >
          Kolo od nás bude vždy pečlivě sestavený a{' '}
          <strong>
            v rámci naší garančky ti ho vezmeme i&nbsp;na&nbsp;servis
          </strong>
          .
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-white"
        >
          Vybavíme tě přilbou, dresem, rukavičkama i&nbsp;brýlema. Abys byl na
          trailu vyfešákovanej&nbsp;a&nbsp;v&nbsp;bezpečí.
        </motion.li>
      </motion.ul>
    </div>
  </div>
)

export default Catchphrase
