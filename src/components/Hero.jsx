import React from 'react'
import { motion } from 'framer-motion'
import { styles } from "../styles.js"
import { mod } from "../assets"
import Skate from './Skate.jsx'

const Hero = () => {
    return (
        <section className='relative w-full h-screen mx-auto flex sm:flex-row flex-col'>
            <div className={`${styles.paddingX} inset-0 absolute flex-2 top-[120px] w-full mx-auto flex flex-row items-start gap-5`}>
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#915eff]' />
                    <div className='w-1 sm:h-80 h-40 violet-gradient ' />
                </div>
                <div>
                    <h1 className={`${styles.heroHeadText} text-black drop-shadow-lg`}> Hi, I'm <span className='text-[#9153ff]'> Kenneth</span></h1>
                    <p className={`${styles.heroSubText} mt-2 text-black-100 drop-shadow-lg `}> I am a Graphic Designer and <br className='sm:block hidden' /> 3D visuals designer</p>
                    <br />
                    <div >
                        <button className={`${styles.heroSubText} relative mt-2  text-black-100 drop-shadow-lg bg-[#9153ff] hover:bg-white font-bold py-2 px-4 rounded cursor-pointer z-10 ease`}>Contact Me</button>
                    </div>
                </div>
            </div>
            <div className='anim-3d w-full '>
                <Skate />
            </div>


        </section>
    )
}

export default Hero