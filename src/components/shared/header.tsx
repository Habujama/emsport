import { FC, useState, useEffect } from 'react'
import { useMedia } from 'react-use'
import { motion } from 'framer-motion'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import className from 'classnames'
import theme from 'tailwindcss/defaultTheme'

import OpeningHours from "../opening-hours/opening-hours"

const { screens } = theme

interface Props {
  siteTitle: string
}

const Header:FC<Props> = ({siteTitle}) => {

  const isNotMobile = useMedia(`(min-width: ${screens.md})`)

  const cardCss = className(
    'whitespace-nowrap rounded-md',
    'hover:bg-blue-50 ease-in-out duration-500',
    'py-4 sm:px-8 px-4'
  )

  const linkCss = className(
    'focus:outline-none focus:ring-1 focus:transition-shadow focus:rounded-md',
    'active:transition-shadow active:duration-200 active:shadow-focus-blue-100',
  )

  const [shouldShowContactUs, setshouldShowContactUs] = useState(false)
  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY
      const isScrollingDown = yPos > 0
      setshouldShowContactUs(isScrollingDown)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  },[])

  const headerAnimation = { type: 'spring', stiffness: 100, duration: 2 }

  return (
    <motion.header 
        className="w-full bg-white font-barlow text-blue-900 text-4xl top-0 py-4 z-10"
        data-testid="header"
        transition={headerAnimation}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
    >
      <motion.div
        className="flex flex-col sm:flex-row justify-between items-center md:pr-10 md:pl-4 px-4"
      >
        <Link
          to="/"
          className={linkCss}
        >
          <motion.div 
            className={cardCss}
          >
            <StaticImage
              src="../../assets/logo.png"
              alt={siteTitle}
              title={siteTitle}
              width={200}
              placeholder="blurred"
              layout="fixed"
            />
          </motion.div>
        </Link>
      <span className="flex flex-col sm:flex-row items-center">
        <Link 
          to="/"
          className={linkCss}
        >
          <motion.div
          className={`${cardCss} hover:py-6`}
          >
            <h1 className="text-xl lg:text-2xl">
              Servis
            </h1>
          </motion.div>
        </Link>

        <Link 
          to="/"
          className={linkCss}
        >
          <motion.div
          className={`${cardCss} hover:py-6`}
          >
            <h1 className="text-xl lg:text-2xl">
              Půjčovna
            </h1>
          </motion.div>
        </Link>

        <Link 
          to="/"
          className={linkCss}
        >
          <motion.div
          className={`${cardCss} hover:py-6`}
          >
            <h1 className="text-xl lg:text-2xl">
              E-shop
            </h1>
          </motion.div>
        </Link>
       
          <Link 
            to="#kontakt"
            className={linkCss}
          >
            <motion.div
            className={`${cardCss} hover:py-6`}
            >
              <h1 className="text-xl lg:text-2xl">
                Kontakt
              </h1>
            </motion.div>
          </Link>
      </span>
      </motion.div>
      {isNotMobile ? 
        <Link to="#kontakt" >
          <motion.div
              className="flex fixed right-0 bg-white rounded-md whitespace-nowrap py-4 px-8"
              animate={{ opacity: shouldShowContactUs ? 1 : 0 }}
              initial={{ opacity: 0}}
              >
                  <OpeningHours />
          </motion.div>
        </Link>
      : null
      }
      
    </motion.header>
  )
}

export default Header
