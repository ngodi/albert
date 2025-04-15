// Import images
import FanbantsImage from '../images/fanbants.png';
import FutaImage from '../images/futa.avif';
import MboahubImage from '../images/mboahub.png';
import MansaImage from '../images/mansa.webp';

export const projectsData = [
	{
		id: 1,
		title: 'Mansa Solutions',
    period: 'August 2023 - Present',
		description: `Mansa is an innovative e-commerce platform designed to seamlessly connect Cameroonians with popular European online stores. 
    With a mission to bridge the gap between local shoppers and a diverse range of high-quality products available in Europe.`,
		img: MansaImage,
		technologies: ['ReactNative', 'Node.js', 'PostgreSql', 'Sentry', 'Firebase', 'Azure'],
    role: "Lead Software Developer",
    accomplishments: ['Led the development and launch, achieving a 25% month-over-month user growth.',
      ' Implemented agile practices, resulting in a 30% reduction in project delivery times.'
    ],
    category: 'Mobile Application',
    liveLink: 'https://gomansa.africa',
    type: 'live'
	},
	{
    id: 2,
		title: 'Fanbants',
    period: 'June 2022 - March 2023',
		description: `FanBants is a fantasy football and reality game where you pick a team of 11 players or housemates and earn points based on how your players or housemates perform in real life.
    The better your player performs in real life, the higher your fantasy points.`,
		img: FanbantsImage,
		technologies: ['Reactjs', 'PWA', 'Ruby on Rails', 'PostgreSql', 'Sentry', 'AWS', 'CircleCI'],
    role: "Full stack Engineer",
    accomplishments: ['Worked on both frontend and backend technologies to improve app performance and user experience.',
      'Performed code reviews, testing, new features integration, deployment, debugging and maintenance.'
    ],
    category: 'Web Application',
    liveLink: 'https://fanbants.com',
    type: 'live'
	},
	{
		id: 3,
		title: 'FutaMobile',
    period: 'November 2021 - May 2022',
		description: `FutaMobile is a cutting-edge fintech solution designed to streamline and simplify mobile money payments. Offers a seamless, secure, and user-friendly experience, 
    enabling individuals and businesses to manage transactions effortlessly.`,
		img: FutaImage,
		technologies: ['Ruby on Rails', 'PostgreSql', 'Sentry', 'AWS'],
    role: "Backend Engineer",
    accomplishments: ['Securely integrated various mobile money payment solutions.',
      'Implemented a robust backend system that processed over 1000 transactions daily.',
      'Implemenet high performant database queries and endpoints to meet applications needs.'
    ],
    category: 'Web Application',
    liveLink: 'https://futamobile.com',
    type: 'live'
	},
	{
		id: 4,
		title: 'MboaHub',
    period: 'February 2022 - May 2024',
		description: `MboaHub is a comprehensive real estate management application designed to simplify property management and enhance the experience for property owners, agents, and tenants. 
    The platform offers a range of tools to efficiently handle property listings, tenant management, rent collection, and maintenance requests—all in one place.`,
		img: MboahubImage,
		technologies: ['Reactjs', 'Ruby on Rails', 'PostgreSql'],
    role: "Full stack Engineer | Solo project",
    accomplishments: ['Managed full-cycle project development from initial planning and design to implementation.',
      'Optimization, and deployment, ensuring high performance, scalability, and seamless user experience.'
    ],
    category: 'Web Application',
    liveLink: 'https://mboahub-web.netlify.app/',
    type: 'demo'
	},
];
