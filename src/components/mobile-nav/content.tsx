import { FC } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'
import classNames from 'classnames'

import OpeningHours from '../../components/opening-hours/opening-hours'

const variants = {
  open: {
    y: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: -50,
    transition: {
      delay: 5,
      y: { stiffness: 1000 },
    },
  },
}

interface Props {
  toggle(): void
}

export const Content: FC<Props> = ({ toggle }) => {
  const linkCss = classNames(
    'px-4 py-2',
    'focus:outline-none focus:ring-1 focus:transition-shadow focus:rounded-md',
    'active:transition-shadow active:duration-200 active:shadow-focus-blue-100'
  )

  return (
    <motion.div
      variants={variants}
      className="absolute left-0 top-0 flex flex-col space-y-4 items-center text-xl w-screen h-screen p-6 outline-none mt-24"
    >
      <Link to="/servis" className={linkCss} onClick={toggle}>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          Servis
        </motion.div>
      </Link>

      <Link to="/" className={linkCss} onClick={toggle}>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          Půjčovna
        </motion.div>
      </Link>

      <Link to="/" className={linkCss} onClick={toggle}>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          E-shop
        </motion.div>
      </Link>

      <Link to="#kontakt" className={linkCss} onClick={toggle}>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          Kontakt
        </motion.div>
      </Link>

      <motion.div className="flex">
        <OpeningHours />
      </motion.div>
    </motion.div>
  )
}

export default Content
