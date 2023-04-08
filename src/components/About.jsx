import Tilt from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles.js"
import { services } from '../constants'
import { fadeIn, textVariant } from "../utils/motion.js"
import { SectionWrapper } from "../hoc"

const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[2px] rounded-[20px]  ">
                <div options={{ max: 45, scale: 1, speed: 450 }} className="bg-[#3d5a80] rounded-[20px] py-5 min-h-[280px] flex justify-evenly items-center flex-col">
                    <img src={icon} alt={title} className='w-16 h-16 object-contain' />
                    <h3 className='text-white text-[20px] font-bold text-center max-w-[150px] justify-center'>{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    )
}

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText2}`}>Introduction</p>
                <h2 className={`${styles.sectionHeadText2}`}>Overview.</h2>
            </motion.div>


            <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-black-100 text-[17px] max-w-3xl leading-[30px]'>
                I am skilled in various programming languages and have experience in building software applications for various platforms. I can develop websites, mobile applications, and desktop software, among others with expertise in frameworks like React, Node.js and Three.js, while ensuring that the user interface is user-friendly and responsive.
                As a graphic designer, I have an eye for detail, color, typography, and layout, and can create visually appealing designs for websites, logos, and branding. I am proficient in various design software such as Adobe Photoshop, Illustrator, and InDesign, among others.
            </motion.p>

            <div className='mt-20 flex flex-wrap gap-10'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index}
                        {...service} />
                ))}

            </div>
        </>
    )
}

export default SectionWrapper(About, 'about')