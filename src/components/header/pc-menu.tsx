import { FC } from 'react'
import { motion } from 'framer-motion'

import OpeningHours from '../../components/opening-hours/opening-hours'
import Button from '../shared/button/Button'

const PCMenu: FC = () => {
  return (
    <>
      <span className="flex flex-row items-center self-center">
        <Button to="/#servis" type="ghost" size="large" className="mr-4">
          <h1 className="">Servis</h1>
        </Button>

        <Button to="/#pujcovna" type="ghost" size="large" className="mr-4">
          <h1 className="">Půjčovna</h1>
        </Button>

        <Button to="/#e-shop" type="ghost" size="large" className="mr-4">
          <h1 className="">E-shop</h1>
        </Button>

        <Button to="/#kontakt" type="ghost" size="large" className="mr-4">
          <h1 className="">Kontakt</h1>
        </Button>
      </span>
      <motion.div className="flex">
        <OpeningHours />
      </motion.div>
    </>
  )
}

export default PCMenu
