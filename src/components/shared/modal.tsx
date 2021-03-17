import { FC, useRef } from 'react'
import { useClickAway } from 'react-use'
import classNames from 'classnames'
import { StaticImage } from "gatsby-plugin-image"


import Button from "./button/Button"

export interface Props {
  toggle(): void
  className?: string
  left?: string
  top?: string
}

const Modal: FC<Props> = ({
  children,
  toggle,
  className,
}) => {
  const containerCss = classNames(
    'fixed lg:w-1/2 left-1/2 top-1/2 bg-white shadow-md rounded-2xl transform -translate-y-1/2 -translate-x-1/2  z-40 px-24 pt-16 pb-20',
    className,
  )

  const clickRef = useRef()
  useClickAway(clickRef, toggle)

  return (
    <div className={containerCss} ref={clickRef} data-testid="modal-container">
      <StaticImage
        src="../../assets/the-chosen-one.jpg"
        height={700}
        quality={100}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        className="flex mb-10 mx-auto"
        />
        <div className="text-center">
          <Button
            onClick={toggle}
            size='large'
            label='Hide The Chosen One'
          >
          </Button>
        </div>
      {children}
    </div>
  )
}

export default Modal
