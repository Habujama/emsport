import { FC } from 'react'
import ReactArcText from 'react-arc-text-fix'
import { StaticImage } from 'gatsby-plugin-image'
/* import { motion } from 'framer-motion' */
import { useMedia } from 'react-use'
import theme from 'tailwindcss/defaultTheme'

const { screens } = theme

const Hero: FC = () => {
  const isNotMobile = useMedia(`(min-width: ${screens.lg})`)
  return (
    <>
      {isNotMobile ? (
        <div className="flex">
          <h3 className="text-blue-900 text-2xl spinner -mb-64 mx-auto">
            <ReactArcText
              text="Kola, lyže, servis, bajky pro všechny sporťáky."
              direction={1}
              arc={90}
            />
          </h3>
        </div>
      ) : null}
      <div className="flex flex-col sm:flex-row items-center max-w-screen-lg mx-auto">
        <StaticImage
          src="../../assets/hero/koula-tym.png"
          alt="emsporťák"
          title="emsporťák"
          height={334}
          placeholder="blurred"
          layout="fixed"
          className="flex mx-auto my-8"
        />
        <StaticImage
          src="../../assets/hero/tata-tym.png"
          alt="emsporťák"
          title="emsporťák"
          height={282}
          placeholder="blurred"
          layout="fixed"
          className="flex mx-auto mb-6 mt-14"
        />
        <StaticImage
          src="../../assets/hero/tomas-tym.png"
          alt="emsporťák"
          title="emsporťák"
          height={320}
          placeholder="blurred"
          layout="fixed"
          className="flex mx-auto my-6"
        />
      </div>
    </>
  )
}

export default Hero
