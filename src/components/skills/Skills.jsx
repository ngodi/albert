import React from 'react'
import SectionHeading from '../sectionheading/SectionHeading'
import Divider from '../divider/Divider'
import { skills } from '../../data/skillsData'
import SkillItem from './SkillItem'

const Skills = () => {
  return (
    <section className="py-8 sm:py-12 mt-5 sm:mt-10 max-w-7xl mx-auto">
      <SectionHeading title="Skills" />
      <Divider />
      <div className="flex flex-row flex-wrap justify-between gap-2 lg:gap-4 w-full mt-6">
        {/* Left Column */}
        <div className="md:items-start">
          {skills.slice(0, 6).map((skill, index) => (
            <SkillItem key={index} skill={skill} />
          ))}
        </div>
        
        {/* Right Column - Align Items to the Right */}
        <div className="md:items-end flex flex-col md:pr-4">
          {skills.slice(6, 11).map((skill, index) => (
            <SkillItem key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills