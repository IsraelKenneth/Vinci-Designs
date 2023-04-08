import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    threejs,
    Project31, Project32, Project33, Project34, firebase, github, Googledrive, Project21, Project22, Project23, Project11, Project12, Project13
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Gym Fitness",
        description:
            "A responsive fitness website for a fitness gym with seamless experience for the customers who come to the gym and new customers too, with features such as an intuitive navigation.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: Project11,
        source_code_link: "https://github.com/",
        source: github
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: Project12,
        source_code_link: "https://github.com/",
        source: github
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: Project13,
        source_code_link: "https://github.com/",
        source: github
    },
];

const projects2 = [
    {
        name: "Kent Chemist",
        description:
            "This includes an intuitive interface that allows users to easily access online pharmacy services. The design features a streamlined layout with clear navigation options, making it simple for users to search for and purchase medications from the comfort of their own homes.",
        tags: [
            {
                name: "Adobe Photoshop",
                color: "blue-text-gradient",
            },
            {
                name: "Adobe Illustrator",
                color: "text-[#FEC20C]",
            },
        ],
        image: Project22,
        source_code_link: "https://drive.google.com/drive/folders/13-LIY5QLgf73l6ZqljJdDOFmkb5OPkHu?usp=share_link",
        source: figma
    },
    {
        name: "Swiss Post",
        description:
            "A user-friendly interface with intuitive navigation options, allowing users to easily access postal and courier services including clear call-to-action buttons and a streamlined checkout process, making it simple for users to send and receive packages from anywhere in the world.",
        tags: [
            {
                name: "Adobe Photoshop",
                color: "blue-text-gradient",
            },
            {
                name: "Adobe Illustrator",
                color: "text-[#FEC20C]",
            },
        ],
        image: Project23,
        source_code_link: "https://drive.google.com/drive/folders/13-LIY5QLgf73l6ZqljJdDOFmkb5OPkHu?usp=share_link",
        source: figma
    },
    {
        name: "Ecommerce App",
        description:
            "Features a clean and modern layout that showcases products in an attractive and easy-to-browse format, includes an intuitive search and filtering options, a seamless checkout process, and multiple payment gateway integrations to ensure a smooth and secure online shopping experience.",
        tags: [
            {
                name: "Adobe Photoshop",
                color: "blue-text-gradient",
            },
            {
                name: "Adobe Illustrator",
                color: "text-[#FEC20C]",
            },
        ],
        image: Project21,
        source_code_link: "https://drive.google.com/drive/folders/13-LIY5QLgf73l6ZqljJdDOFmkb5OPkHu?usp=share_link",
        source: figma
    },

];


const projects3 = [
    {
        name: "Branding",
        description:
            "Design that showcases a diverese range of creative works, for companies I have worked with.",
        tags: [
            {
                name: "Adobe Photoshop",
                color: "blue-text-gradient",
            },
            {
                name: "Adobe Illustrator",
                color: "text-[#FEC20C]",
            },
        ],
        image: Project34,
        source_code_link: "https://drive.google.com/drive/folders/13-LIY5QLgf73l6ZqljJdDOFmkb5OPkHu?usp=share_link",
        source: Googledrive
    },
    {
        name: "Logo creation",
        description:
            "Design that showcases a diverese range of Logo works, for companies I have worked with.",
        tags: [
            {
                name: "Adobe Photoshop",
                color: "blue-text-gradient",
            },
            {
                name: "Adobe Illustrator",
                color: "text-[#FEC20C]",
            },
        ],
        image: Project31,
        source_code_link: "https://drive.google.com/drive/folders/13-LIY5QLgf73l6ZqljJdDOFmkb5OPkHu?usp=share_link",
        source: Googledrive
    },
    {
        name: "Flyer",
        description:
            "Design that showcases a diverese range of creative flyers, for companies I have worked with.",
        tags: [
            {
                name: "Adobe Photoshop",
                color: "blue-text-gradient",
            },
            {
                name: "Adobe Illustrator",
                color: "text-[#FEC20C]",
            },
        ],
        image: Project33,
        source_code_link: "https://drive.google.com/drive/folders/13-LIY5QLgf73l6ZqljJdDOFmkb5OPkHu?usp=share_link",
        source: Googledrive
    },

];

const Techs = [
    {
        image: html,
        name: "HTML",
    },
    {
        image: css,
        name: "CSS",
    },
    {
        image: javascript,
        name: "JAVASCRIPT",
    },
    {
        image: reactjs,
        name: "REACT",
    },
    {
        image: git,
        name: "GITHUB",
    },
    {
        image: nodejs,
        name: "NODE JS",
    },
    {
        image: mongodb,
        name: "MONGO DB",
    },
    {
        image: tailwind,
        name: "TAILWIND",
    },
    {
        image: firebase,
        name: "FIREBASE",
    },
    {
        image: docker,
        name: "DOCKER",
    },
    {
        image: figma,
        name: "FIGMA",
    },
    {
        image: threejs,
        name: "THREEJS",
    }
]

export { services, technologies, experiences, testimonials, projects, Techs, projects3, projects2 };