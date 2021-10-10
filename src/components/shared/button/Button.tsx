import { FC, useRef } from 'react'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'

enum ButtonType {
  GHOST = 'ghost',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}
enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}
type Size = 'small' | 'medium' | 'large'
type Type = 'ghost' | 'primary' | 'secondary'
type Target = '_blank'
export interface ButtonProps {
  type?: Type
  size?: Size
  target?: Target
  href?: string
  to?: string
  disabled?: boolean
  className?: string
  onClick?: () => void
}

const Button: FC<ButtonProps> = ({
  size = ButtonSize.MEDIUM,
  type = ButtonType.PRIMARY,
  href,
  target,
  to,
  className,
  children,
}) => {
  const ref = useRef()

  const css = classNames(
    'transform  text-center outline-none whitespace-no-wrap rounded-md px-4',
    className,
    {
      'bg-transparent hover:bg-blue-300 hover:ease-in-out hover:duration-500 hover:text-black-900 active:ring-4 active:ring-blue-100 active:scale-90':
        ButtonType.GHOST === type,

      'bg-blue-300 text-gray-800 hover:bg-blue-400 hover:ease-in-out hover:duration-500 hover:scale-110 active:ring-4 active:ring-blue-100 active:scale-80':
        ButtonType.PRIMARY === type,

      'border-2 border-solid border-blue-300 text-blue-400 hover:border-blue-400 shadow-lg hover:bg-blue-400 hover:text-white hover:ease-in-out hover:duration-500 active:ring-4 active:ring-blue-100 transform active:scale-90':
        ButtonType.SECONDARY === type,

      'py-2 px-2': ButtonSize.SMALL === size,
      'py-3 px-3 leading-7': ButtonSize.MEDIUM === size,
      'py-4 px-4 sm:px-8 leading-8 text-xl': ButtonSize.LARGE === size,
    }
  )

  if (to) {
    return (
      <Link to={to} className={css} ref={ref}>
        {children}
      </Link>
    )
  }

  if (href) {
    const rel = target && 'noopener noreferrer'

    return (
      <a href={href} className={css} target={target} rel={rel} ref={ref}>
        {children}
      </a>
    )
  }

  return (
    <motion.button className={css} type="button" ref={ref}>
      {children}
    </motion.button>
  )
}

export default Button
