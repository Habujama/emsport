import { FC, useEffect } from 'react'
import { motion, usePresence } from 'framer-motion'

import Button from '../shared/button/Button'
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
      y: { stiffness: 1000 },
    },
  },
}

interface Props {
  toggle(): void
}

const MenuItems: FC<Props> = ({ toggle }) => {
  const [isPresent, safeToRemove] = usePresence()

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 1000)
  }, [isPresent, safeToRemove])

  return (
    <>
      <motion.div
        variants={variants}
        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 items-center justify-between outline-none"
      >
        <Button
          to="/servis"
          buttonStyle="ghost"
          size="large"
          className="sm:mr-4"
          onClick={toggle}
        >
          <h1 className="">Servis</h1>
        </Button>

        <Button
          to="/pujcovna"
          buttonStyle="ghost"
          size="large"
          className="sm:mr-4"
          onClick={toggle}
        >
          <h1 className="">Půjčovna</h1>
        </Button>

        <Button
          to="/nabidka"
          buttonStyle="ghost"
          size="large"
          className="sm:mr-4"
          onClick={toggle}
        >
          <h1 className="">Nabídka</h1>
        </Button>

        <Button
          to="/#kontakt"
          buttonStyle="ghost"
          size="large"
          className="sm:mr-4"
          onClick={toggle}
        >
          <h1 className="">Kontakt</h1>
        </Button>
      </motion.div>

      <motion.div className="flex ">
        <OpeningHours />
      </motion.div>
    </>
  )
}

export default MenuItems
