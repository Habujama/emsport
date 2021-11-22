import { FC, useRef } from 'react'
import { useClickAway } from 'react-use'
import classNames from 'classnames'

import Button from './button/Button'

export interface Props {
  toggle(): void
  className?: string
  left?: string
  top?: string
}

const Modal: FC<Props> = ({ children, toggle, className }) => {
  const containerCss = classNames(
    'fixed lg:w-1/2 left-1/2 top-1/2 bg-white shadow-md rounded-2xl transform -translate-y-1/2 -translate-x-1/2  z-40 px-24 pt-16 pb-20',
    className
  )

  const clickRef = useRef()
  useClickAway(clickRef, toggle)

  return (
    <div className={containerCss} ref={clickRef} data-testid="modal-container">
      <div className="text-center">
        <Button onClick={toggle} size="large"></Button>
      </div>
      {children}
    </div>
  )
}

export default Modal
