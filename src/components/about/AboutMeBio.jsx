import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';

const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
        <div className="font-general-regular w-full sm:w-full text-left">
          {aboutMe.map((bio) => (
            <p
              className="mb-4 mt-4 font-light text-lg md:text-xl lg:text-2xl text-left leading-relaxed text-gray-500 dark:text-gray-300"
              key={bio.id}
            >
              {bio.bio}
            </p>
          ))}
        </div>
    </div>
	);
};

export default AboutMeBio;
