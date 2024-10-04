import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({name, url}) => {
  return (
    <Link
      to={url}
      className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
      aria-label="Contact"
    >
      {name}
    </Link>
  )
}

export default NavItem