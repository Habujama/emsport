import { FC, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import classNames from 'classnames'

import OpeningHours from "../opening-hours/opening-hours"

interface Props {
  siteTitle: string
}

const Header:FC<Props> = ({siteTitle}) => {

  const [isScrolling, setIsScrolling] = useState(false)
  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY
      const isScrollingDown = yPos > 0
      setIsScrolling(isScrollingDown)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  },[])

  const headerAnimation = { type: 'spring', stiffness: 100, duration: 2 }

  const cardCss = classNames(
    'whitespace-nowrap rounded-md',
    'hover:bg-blue-800 ease-in-out duration-500',
    'py-4 sm:px-8 px-4'
  )

  const linkCss = classNames(
    'focus:outline-none focus:ring-1 focus:transition-shadow focus:rounded-md',
    'active:transition-shadow active:duration-200 active:shadow-focus-blue-100',
  )
  
  const headerCss = classNames(
    'w-full font-barlow text-white text-xl top-0 z-10',
    {
      'bg-header-gradient fixed text-lg shadow-md py-2': isScrolling,
      'py-4': !isScrolling,
    },
    )

  return (
    <motion.header 
        className={headerCss}
        data-testid="header"
        transition={headerAnimation}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
    >
      <motion.div
        className="flex flex-col sm:flex-row justify-between items-center px-4"
      >
        <Link
          to="/"
          className={`${linkCss} sm:px-8 px-4`}
        >
            <StaticImage
              src="../../assets/logo-bile.png"
              alt={siteTitle}
              title={siteTitle}
              height={50}
              placeholder="blurred"
              layout="fixed"
              
            />
        </Link>
      <span className="flex flex-col sm:flex-row items-center self-center">
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
      </motion.div>
    </motion.header>
  )
}

export default Header
