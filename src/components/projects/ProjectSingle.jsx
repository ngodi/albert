import { motion } from 'framer-motion';

const ProjectSingle = ({ title, description, accomplishments, technologies, liveLink, sourceLink, image, role, period, type }) => {
  console.log(description)
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
    <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-12 flex flex-col md:flex-row items-center bg-secondary-light dark:bg-ternary-dark gap-4">
      {/* Project Content - Left Section */}
      <div className="md:w-2/3 p-4 flex flex-col justify-between">
        {/* Project Title */}
        <p className="font-general-semibold text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-4">
          {title} &nbsp;&nbsp; | <span className='font-normal text-base text-gray-500'>{period}</span>
        </p>
        <span className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light">
          Role: &nbsp; {role}
        </span>

        {/* Description */}
        <p className="mb-3 text-base md:text-lg text-gray-700 dark:text-gray-300">
          {description}
        </p>
       <hr />
        {/* Outcome */}
        <p className="mb-5 text-sm md:text-base text-gray-600 dark:text-gray-400">
          <ul className='list-disc ml-5 mt-2'>
            {
              accomplishments?.map((accomplishment, index) => (<li key={index}>{accomplishment}</li>))
            }
          </ul>
        </p>
         {/* Tech Stack */}
         <p className="mb-3 text-sm md:text-base text-ternary-dark dark:text-ternary-light">
          {
            technologies?.map((tech, index) => (
              <span key={index} className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-2 rounded-md mr-1">
                {tech}
              </span>
            ))
          }
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-between mt-8">
          {/* Live Project Button */}
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-white bg-indigo-500 hover:bg-indigo-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-300 transition duration-300 ease-in-out"
            aria-label="Live Project"
          >
            {type === 'live' ? 'View' : 'Demo'} 
          </a>

          {/* Source Code Button */}
          <a
            href={sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 ${
              sourceLink
                ? 'text-white bg-gray-800 hover:bg-gray-900'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            } rounded-lg shadow-md focus:outline-none focus:ring-2 ${
              sourceLink ? 'focus:ring-gray-500' : 'focus:ring-gray-300'
            } transition duration-300 ease-in-out`}
            aria-label="Source Code"
            disabled={!sourceLink} // Disable button if sourceLink is not provided
          >
            {/* Source Code */}
          </a>
        </div>
      </div>

      {/* Project Image - Right Section */}
      <div className="md:w-1/3">
        <img
          src={image}
          className="w-full h-64 md:h-full object-cover rounded-b-xl md:rounded-none md:rounded-r-xl"
          alt={title}
        />
      </div>
    </div>
		</motion.div>
	);
};

export default ProjectSingle;
