import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { FiArrowDownCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { AboutMeProvider } from '../../context/AboutMeContext';
import AboutMeBio from '../about/AboutMeBio';
import ProfileImage from '../../images/profile.jpeg';

const AppBanner = () => {
	const [activeTheme] = useThemeSwitcher();

	return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
    className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6 border-indigo-100 px-4 min-w-[320px] sm:min-w-[400px] lg:min-w-[600px]"
  >
    {/* Profile Image Section */}
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
      className="w-full md:w-1/3 lg:w-1/4 flex justify-center md:justify-end order-first md:order-last mt-8 md:mt-0"
    >
      <img
        className="rounded-lg w-1/2 sm:w-1/3 md:w-3/4 lg:w-full"
        src={activeTheme === 'dark' ? ProfileImage : ProfileImage}
        alt="Developer"
      />
    </motion.div>
  
    {/* Text Content Section */}
    <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left lg:pr-8">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.1 }}
        className="font-general-semibold text-2xl md:text-3xl lg:text-4xl text-center md:text-left text-ternary-dark dark:text-primary-light uppercase"
      >
        Hi, Albert Ngodi
      </motion.h1>
  
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
        className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl text-center md:text-left leading-normal text-gray-500 dark:text-gray-200"
      >
        A Full-Stack Developer
      </motion.p>
  
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.3 }}
        className="flex justify-center md:justify-start mt-8"
      >
        <a
          download="Ngodi Albert-Resume.pdf"
          href="/files/NGODI-CV.pdf"
          className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
          aria-label="Download Resume"
        >
          <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 duration-100" />
          <span className="text-sm sm:text-lg font-general-medium duration-100">
            Download CV
          </span>
        </a>
      </motion.div>
  
      {/* About Me Component */}
      <AboutMeProvider>
        <AboutMeBio />
      </AboutMeProvider>
    </div>
  </motion.section>
	);
};

export default AppBanner;
