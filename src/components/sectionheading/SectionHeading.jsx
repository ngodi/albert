import React from 'react'

const SectionHeading = ({title}) => {
  return (
    <div className="text-center">
      <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
        {title}
      </p>
    </div>
  )
}

export default SectionHeading;