import { FC } from 'react'
import { motion } from 'framer-motion'

import Maty from './maty'
import Tomas from './tomas'
import Martin from './martin'
import Monika from './monika'

import Card from '../shared/card'

const Team: FC = () => {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-center sm:pt-16 mb-8"
      >
        Náš tým
      </motion.h2>
      <div className="flex flex-col sm:flex-row">
        <Card className="flex flex-col" cardBackgroundColor="bg-gray-800">
          <Martin />
        </Card>
        <Card className="flex flex-col" cardBackgroundColor="bg-gray-800">
          <Tomas />
        </Card>
      </div>
      <div className="flex flex-col sm:flex-row mb-12">
        <Card className="flex flex-col" cardBackgroundColor="bg-gray-800">
          <Maty />
        </Card>
        <Card className="flex flex-col" cardBackgroundColor="bg-gray-800">
          <Monika />
        </Card>
      </div>
    </>
  )
}

export default Team
