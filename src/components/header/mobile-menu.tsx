import { FC, useState, useRef } from 'react'
import { motion } from 'framer-motion'

import useClickOutside from '../../hooks/use-click-outside'
import MenuToggle from './menu-toggle'
import MenuItems from './menu-items'

const MobileMenu: FC = () => {
    const [isOpen, setOpen] = useState(false)
    const clickRef = useRef()
    const toggle = () => setOpen(!isOpen)
    useClickOutside(clickRef, toggle)
  
    return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="flex flex-col w-full mx-auto"
    >
        <MenuToggle toggle={toggle} />
        {isOpen && (
          <div
            ref={clickRef}
            className="flex flex-col space-y-4 items-center outline-none"
          >
            <MenuItems toggle={toggle} />
          </div>
        )}
      </motion.nav>
    )
  }
  export default MobileMenu


