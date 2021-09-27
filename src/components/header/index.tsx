import { FC, useState, useEffect } from 'react'
import { useMedia } from 'react-use'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import classNames from 'classnames'
import theme from 'tailwindcss/defaultTheme'

import PCMenu from './pc-menu'
import MobileNav from '../mobile-nav'

interface Props {
  siteTitle: string
}

const { screens } = theme

const Header: FC<Props> = ({ siteTitle }) => {
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
  }, [])

  const headerAnimation = { type: 'spring', stiffness: 100, duration: 2 }

  const isNotMobile = useMedia(`(min-width: ${screens.lg})`)

  const linkCss = classNames(
    'focus:outline-none focus:ring-1 focus:transition-shadow focus:rounded-md',
    'active:transition-shadow active:duration-200 active:shadow-focus-blue-100'
  )

  const headerCss = classNames(
    'sticky flex top-0 font-barlow text-lg text-white px-6 z-30',
    {
      'bg-header-gradient text-md shadow-md py-4': isScrolling && isNotMobile,
      'bg-black-900': isScrolling && !isNotMobile,
      'py-6': !isScrolling,
    }
  )

  return (
    <motion.header
      className={headerCss}
      data-testid="header"
      transition={headerAnimation}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex-1 flex items-center justify-between max-w-laptop mx-auto">
        <Link to="/" className={`${linkCss} mt-4 lg:mt-0 lg:pl-8`}>
          <StaticImage
            src="../../assets/header/logo-bile.png"
            alt={siteTitle}
            title={siteTitle}
            height={50}
            placeholder="blurred"
            layout="fixed"
          />
        </Link>
        {isNotMobile ? <PCMenu /> : <MobileNav />}
      </div>
    </motion.header>
  )
}

export default Header
