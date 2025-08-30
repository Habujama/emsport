import { FC } from 'react'
import { motion } from 'framer-motion'

import Maty from './maty'
import Tomas from './tomas'
import Monika from './monika'

import Card from '../shared/card'
import Adela from './adela'

const Team: FC = () => {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-2xl sm:text-4xl font-bold text-center lg:pt-16 sm:mb-8 my-8"
      >
        Náš tým
      </motion.h2>
      <div className="flex flex-col lg:flex-row">
        <Card className="flex flex-col" cardBackgroundColor="bg-gray-800">
          <Tomas />
        </Card>
        <Card className="flex flex-col" cardBackgroundColor="bg-gray-800">
          <Maty />
        </Card>
      </div>
      <div className="flex flex-col lg:flex-row mb-12">
        <Card className="flex flex-col" cardBackgroundColor="bg-gray-800">
          <Monika />
        </Card>
        <Card className="flex flex-col" cardBackgroundColor="bg-gray-800">
          <Adela />
        </Card>
      </div>
    </>
  )
}

export default Team
