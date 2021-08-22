import { FC } from 'react'
import { motion } from 'framer-motion'
import { Link } from "gatsby"
import classNames from 'classnames'

import OpeningHours from '../../components/opening-hours/opening-hours'

const PCMenu:FC = () => {
    const cardCss = classNames(
        'whitespace-nowrap rounded-md',
        'hover:bg-blue-800 ease-in-out duration-500',
        'py-4 sm:px-8 px-4'
      )
    
      const linkCss = classNames(
        'focus:outline-none focus:ring-1 focus:transition-shadow focus:rounded-md',
        'active:transition-shadow active:duration-200 active:shadow-focus-blue-100',
      )
    return (
    <>
    <span className="flex flex-row items-center self-center">
        <Link 
          to="/"
          className={linkCss}
        >
          <motion.div
          className={`${cardCss} hover:py-4`}
          >
            <h1 className="">
              Servis
            </h1>
          </motion.div>
        </Link>

        <Link 
          to="/"
          className={linkCss}
        >
          <motion.div
          className={`${cardCss} hover:py-4`}
          >
            <h1 className="">
              Půjčovna
            </h1>
          </motion.div>
        </Link>

        <Link 
          to="/"
          className={linkCss}
        >
          <motion.div
          className={`${cardCss} hover:py-4`}
          >
            <h1 className="">
              E-shop
            </h1>
          </motion.div>
        </Link>
       
          <Link 
            to="#kontakt"
            className={linkCss}
          >
            <motion.div
            className={`${cardCss} hover:py-4`}
            >
              <h1 className="">
                Kontakt
              </h1>
            </motion.div>
          </Link>
      </span>
      <motion.div
      className={`flex`}
      >
        <OpeningHours />
  </motion.div>
  </>
    )
}

export default PCMenu 