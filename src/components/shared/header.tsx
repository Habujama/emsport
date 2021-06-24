import { FC, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import className from 'classnames'

interface Props {
  siteTitle: string
}

const Header:FC<Props> = ({siteTitle}) => {

  const cardCss = className(
    'whitespace-nowrap',
    'hover:bg-blue-50 ease-in-out duration-500',
    'active:bg-blue-100 active:transition-shadow active:duration-200 active:shadow-focus-blue-100',
    'py-4 sm:px-8 px-4'
  )

  const whileTap = { scale: 0.97 }

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
        className="flex flex-col sm:grid grid-rows-1 grid-cols-3 sm:grid-cols-12 items-center md:px-14 px-4"
      >
        <Link
          to="/"
          className="flex row-start-1 row-span-1 col-start-2 sm:col-start-1 col-end-4 col-span-4"
        >
          <motion.button 
            className={`${cardCss} flex rounded-md items-center`}
            whileTap={whileTap}
          >
            <StaticImage
              src="../../assets/logo.png"
              alt={siteTitle}
              title={siteTitle}
              width={200}
              placeholder="blurred"
              layout="fixed"
            />
          </motion.button>
        </Link>
      <span className="flex flex-col sm:flex-row row-start-2 sm:row-start-1 row-span-1 col-start-2 sm:col-start-8 sm:col-end-12 items-center mx-auto">
        <Link to="/">
          <motion.div
          className={`${cardCss} col-start-6 col-end-7 col-span-1 bg-white rounded-md hover:py-6`}
          >
            <h1 className="text-2xl">
              Servis
            </h1>
          </motion.div>
        </Link>

        <Link to="/">
          <motion.div
          className={`${cardCss} col-start-7 col-end-8 bg-white rounded-md hover:py-6`}
          >
            <h1 className="text-2xl">
              Půjčovna
            </h1>
          </motion.div>
        </Link>

        <Link to="/">
          <motion.div
          className={`${cardCss} col-start-8 col-end-9 bg-white rounded-md hover:py-6`}
          >
            <h1 className="text-2xl">
              E-shop
            </h1>
          </motion.div>
        </Link>
       
          <Link to="/">
            <motion.div
            className={`${cardCss} col-start-8 col-end-9 bg-white rounded-md hover:py-6`}
            >
              <h1 className="text-2xl">
                Kontakt
              </h1>
            </motion.div>
          </Link>
      </span>
      </motion.div>
      <motion.div
          className="flex fixed right-0 row-start-1 row-span-1 col-start-12 col-end-12 col-span-1 bg-white rounded-md whitespace-nowrap py-4 px-8"
          animate={{ opacity: shouldShowContactUs ? 1 : 0 }}
          initial={{ opacity: 0}}
          >
              <StaticImage
                src="../../assets/online.svg"
                alt={siteTitle}
                title={siteTitle}
                width={35}
                placeholder="blurred"
                layout="fixed"
                className="items-center self-center mr-2 animate-pulse"
              />
              <span className="flex flex-col">
              <h3 className="text-base text-center pb-2">
                Teď máme otevřeno
              </h3>
              <h3 className="text-lg flex text-center text-center">
                775 710 011
              </h3>
              </span>
          </motion.div>
    </motion.header>
  )
}

export default Header
