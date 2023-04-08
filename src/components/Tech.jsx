import { motion } from "framer-motion"
import { styles } from "../styles.js"
import { Techs } from '../constants'
import { fadeIn, textVariant } from "../utils/motion.js"
import { SectionWrapper } from "../hoc"

const Techcard = ({ index, name, image }) => (
    <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} >
        <div options={{ max: 45, scale: 1, speed: 450 }} className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500 '>
            <img src={image} alt={name} className='w-20 pt-3 mx-auto' />
            <p className='my-4'>{name}</p>
        </div>
    </motion.div>
)


const Tech = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText2}`}>Technologies I have worked with</p>
                <h2 className={`${styles.sectionHeadText2}`}>Technologies</h2>
            </motion.div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8 text-black">
                {Techs.map((tech, index) => (
                    <Techcard key={tech.name} index={index}
                        {...tech} />
                ))}
            </div>

        </>
    );
}

export default SectionWrapper(Tech, "tech")

    // < div name = 'skills' className = 'w-full h-screen text-black' >
    //     {/* Container */ }
    //     < div className = 'max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full' >
    //             <div>
    //                 <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
    //                 <p className='py-4'>// These are the technologies I've worked with</p>
    //             </div>

    //             <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
    //                 <div className=>
    //                     <img className='w-20 pt-3 mx-auto' src={HTML} alt="HTML icon" />
    //                     <p className='my-4'>HTML</p>
    //                 </div>
    //                 <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500'>
    //                     <img className='w-20 mx-auto pt-3' src={CSS} alt="HTML icon" />
    //                     <p className='my-4'>CSS</p>
    //                 </div>
    //                 <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500'>
    //                     <img className='w-20 mx-auto pt-3' src={JavaScript} alt="HTML icon" />
    //                     <p className='my-4'>JAVASCRIPT</p>
    //                 </div>
    //                 <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500'>
    //                     <img className='w-20 mx-auto pt-3' src={ReactImg} alt="HTML icon" />
    //                     <p className='my-4'>REACT</p>
    //                 </div>
    //                 <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500'>
    //                     <img className='w-20 mx-auto pt-3' src={GitHub} alt="HTML icon" />
    //                     <p className='my-4'>GITHUB</p>
    //                 </div>
    //                 <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500'>
    //                     <img className='w-20 mx-auto pt-3 ' src={Node} alt="HTML icon" />
    //                     <p className='my-4'>NODE JS</p>
    //                 </div>
    //                 <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500'>
    //                     <img className='w-20 mx-auto pt-3' src={Mongo} alt="HTML icon" />
    //                     <p className='my-4'>MONGO DB</p>
    //                 </div>
    //                 <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500'>
    //                     <img className='w-20 mx-auto pt-3' src={Tailwind} alt="HTML icon" />
    //                     <p className='my-4'>TAILWIND</p>
    //                 </div>
    //                 <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500'>
    //                     <img className='w-20 mx-auto pt-3' src={FireBase} alt="HTML icon" />
    //                     <p className='my-4'>FIREBASE</p>
    //                 </div>
    //             </div>
    //         </ >
    //     </div >