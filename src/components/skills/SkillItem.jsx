import React from 'react'

const SkillItem = ({skill}) => {
  return (
    <div className="mb-5 w-full flex flex-wrap gap-2">
    {skill.split(" ").map((subkill, index) => (
      <div
        key={index}
        className="bg-indigo-50 dark:bg-gray-700 font-general-medium text-sm md:text-base lg:text-lg font-medium text-gray-800 dark:text-gray-200 p-1 rounded-md transform transition duration-300 cursor-pointer hover:bg-indigo-100 dark:hover:bg-gray-600 hover:scale-105 shadow-sm"
      >
        {subkill}
      </div>
    ))}
  </div>
  )
}

export default SkillItem;