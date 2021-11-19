import { FC } from 'react'
import { motion } from 'framer-motion'
import classnames from 'classnames'
import { StaticImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStar,
  faBicycle,
  faHandSparkles,
} from '@fortawesome/free-solid-svg-icons'

const Catchphrase: FC = () => {
  const faImageLiCss = classnames('text-blue-300 text-3xl self-center')
  const ImageCircle = classnames(
    'lg:border-2 lg:border-solid lg:border-white lg:rounded-full lg:p-4 mr-4'
  )
  const liCss = classnames('flex text-lg max-w-lg')
  const phraseCss = classnames('self-center')

  return (
    <div className="flex flex-col md:flex-row md:space-x-24 p-4">
      <div className="self-center mb-6 sm:mb-0">
        <StaticImage
          src="../../assets/emsportak.png"
          alt=""
          height={250}
          placeholder="blurred"
          layout="fixed"
        />
      </div>
      <div className="mb-16">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-2xl font-barlow font-medium sm:pt-16 text-justify md:text-left"
        >
          Přímo na prodejně pro tebe máme víc jak{' '}
          <strong>100&nbsp;modelů&nbsp;kol</strong> - silničky, gravely, horský
          kola, elektrokola, koloběžky, trekkingový i&nbsp;dětský.&nbsp;
        </motion.h2>
        <motion.ul className="space-y-4 sm:my-8 my-4">
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className={`${liCss}`}
          >
            <span className={ImageCircle}>
              <FontAwesomeIcon icon={faStar} className={faImageLiCss} />
            </span>
            <p className={phraseCss}>
              Na prodejně si nevybereš? Stačí říct a seženeme ti to!
            </p>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className={liCss}
          >
            <span className={ImageCircle}>
              <FontAwesomeIcon icon={faBicycle} className={faImageLiCss} />
            </span>
            <p className={phraseCss}>
              Kolo od nás bude vždy pečlivě sestavený a{' '}
              <strong>
                v rámci naší garančky ti ho vezmeme i&nbsp;na&nbsp;servis
              </strong>
              .
            </p>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className={liCss}
          >
            <span className={ImageCircle}>
              <FontAwesomeIcon icon={faHandSparkles} className={faImageLiCss} />
            </span>
            <p className={phraseCss}>
              {' '}
              Vybavíme tě přilbou, dresem, rukavičkama i&nbsp;brýlema. Abys byl
              na trailu vyfešákovanej&nbsp;a&nbsp;v&nbsp;bezpečí.
            </p>
          </motion.li>
        </motion.ul>
      </div>
    </div>
  )
}

export default Catchphrase
