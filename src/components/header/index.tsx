import { FC, useState, useEffect } from 'react'
import { useMedia } from 'react-use'
import { motion } from 'framer-motion'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import classNames from 'classnames'
import theme from 'tailwindcss/defaultTheme'

import PCMenu from "./pc-menu"
import MobileMenu from './mobile-menu'

interface Props {
  siteTitle: string
}

const { screens } = theme

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

  const isNotMobile = useMedia(`(min-width: ${screens.md})`)

  const linkCss = classNames(
    'focus:outline-none focus:ring-1 focus:transition-shadow focus:rounded-md',
    'active:transition-shadow active:duration-200 active:shadow-focus-blue-100',
  )
  
  const headerCss = classNames(
    'w-full font-barlow text-white text-xl top-0 z-10',
    {
      'fixed bg-header-gradient text-lg shadow-md py-2': isScrolling && isNotMobile,
      'fixed bg-black-600': !isNotMobile,
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
          className={`${linkCss} pt-4 sm:py-4 sm:pt-0 sm:pl-8`}
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
        {isNotMobile ? 
          <PCMenu /> : <MobileMenu />
        }
      </motion.div>
    </motion.header>
  )
}

export default Header
