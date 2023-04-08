import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css';
import { styles } from "../styles"
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant, fadeIn } from '../utils/motion';
import { mod } from '../assets';



const ExperienceCard = ({ experience, index }) => (
    <VerticalTimelineElement
        contentStyle={{ background: '#3d5a80', color: '#0000' }}
        contentArrowStyle={{ borderRight: '7px solid  #3d5a80' }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={<div className='flex justify-center items-center w-full h-full'>
            <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain' />
        </div>}>
        <div>
            <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
            <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>{experience.company_name}</p>
        </div>
        <ul className='mt-5 list-disc ml-5 space-y-2'>
            {experience.points.map((point, index) => (
                <li key={index} className='text-white-100 text-[14px] pl-1 tracking-wider'>
                    {point}
                </li>
            ))}
        </ul>
    </VerticalTimelineElement>
)


const Experience = () => {
    return (
        <>
            <div className='flex flex-row w-full'>
                <div className='flex flex-col flex-1'>
                    <motion.div variants={textVariant()}>
                        <p className={`${styles.sectionSubText2}`}>What I have done so far</p>
                        <h2 className={`${styles.sectionHeadText2}`}>Work Experience.</h2>
                    </motion.div>
                    <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-black-100 text-[17px] max-w-3xl leading-[30px]'>
                        Work experience in frontend and backend development involves building and implementing web application interfaces using HTML, CSS, JavaScript, Nodejs just to mention a few. Creation of mobile applications for iOS and Android platforms, and also Graphic desigining works using software tools like Adobe Photoshop and Illustrator to create visual designs for print and digital media, such as logos, brochures, and websites.
                    </motion.p>
                </div>
                <motion.img variants={fadeIn("", "", 0.1, 1)} className=' anim-3d hidden md:block h-[18rem]  object-contain' src={mod} alt='vinci-designs hire me' />
            </div>

            <div className='mt-20 flex flex-col'>
                <VerticalTimeline lineColor="#3d5a80">
                    {experiences.map((experience, index) => {
                        return (
                            <ExperienceCard key={index} experience={experience} />
                        )
                    })}
                </VerticalTimeline>
            </div>
        </>
    )
}

export default SectionWrapper(Experience, "experience")