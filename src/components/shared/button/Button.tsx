import { FC, useRef } from 'react'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'

enum ButtonColor {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}
enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}
type Size = 'small' | 'medium' | 'large'
type Color = 'primary' | 'secondary'
type Target = '_blank'
export interface ButtonProps {
  color?: Color
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
  color = ButtonColor.PRIMARY,
  href,
  target,
  to,
  className,
  children,
}) => {
  const ref = useRef()

  const css = classNames(
    'text-center outline-none whitespace-no-wrap rounded-md px-4',
    className,
    {
      'transform hover:bg-blue-600 hover:ease-in-out hover:duration-500 active:ring-4 active:ring-red-100 active:scale-90':
        ButtonColor.PRIMARY === color,

      'hover:bg-white hover:text-blue-600 hover:ease-in-out hover:duration-500 active:ring-4 active:ring-blue-100 transform active:scale-90':
        ButtonColor.SECONDARY === color,

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
