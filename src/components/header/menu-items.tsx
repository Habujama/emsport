import { FC } from 'react'
import { Link } from "gatsby"
import { motion } from 'framer-motion'
import classNames from 'classnames'

import OpeningHours from '../../components/opening-hours/opening-hours'

const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: -50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

  interface Props {
    toggle: any
  }


const MenuItems:FC<Props> = ({ toggle }) => {
    const cardCss = classNames(
        'whitespace-nowrap rounded-md',
        'py-4 sm:px-8 px-4'
      )
    
      const linkCss = classNames(
        'focus:outline-none focus:ring-1 focus:transition-shadow focus:rounded-md',
        'active:transition-shadow active:duration-200 active:shadow-focus-blue-100',
      )
return (
    <motion.div
      variants={variants}
      className="flex flex-col space-y-4 items-center text-white justify-between outline-none"
    > 
        <Link 
          to="/"
          className={linkCss}
          
        >
          <motion.div
          className={`${cardCss} hover:py-4`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggle}
          >
              Servis
          </motion.div>
        </Link>

        <Link 
          to="/"
          className={linkCss}
          
        >
          <motion.div
          className={`${cardCss} hover:py-4`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggle}
          >
              Mobile
          </motion.div>
        </Link>

        <Link 
          to="/"
          className={linkCss}
          
        >
          <motion.div
          className={`${cardCss} hover:py-4`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggle}
          >
              E-shop
          </motion.div>
        </Link>
       
        <Link 
          to="#kontakt"
          className={linkCss}
          
        >
          <motion.div
            className={`${cardCss} hover:py-4`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggle}
          >
              Kontakt
          </motion.div>
        </Link>
        
        <motion.div
          className={`flex`}
        >
          <OpeningHours />
        </motion.div>
    </motion.div>
    )
}

export default MenuItems