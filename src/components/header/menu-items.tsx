import React from 'react'
import { FC, useEffect } from 'react'
import { motion, usePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

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
          href="https://571953.myshoptet.com"
          buttonStyle="ghost"
          size="large"
          className="sm:mr-4"
          onClick={toggle}
        >
          <h1 className="whitespace-nowrap">E-shop</h1>
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
        <Button
          buttonStyle="ghost"
          href="https://www.facebook.com/emsportslany"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </Button>
      </motion.div>

      <motion.div className="flex ">
        <OpeningHours />
      </motion.div>
    </>
  )
}

export default MenuItems
