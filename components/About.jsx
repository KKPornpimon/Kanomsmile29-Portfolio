'use client'

import Image from "next/image"
import SkillsPage from "./SkillsPage"
import { MotionDiv } from "@/utils/Framer_motion"
import { transition, varients } from "@/utils/Framer_varients"

const About = () => {
  return (
    <section id="about" className="mt-20">
        <div className="text-center">
            <h1 className="text-[23px] gardient-text capitalize">about me</h1> 
            <h1 className="text-gray-300 text-[30px] font-semibold capitalize">Pornpimon Pradabsri</h1>  
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="px-2 py-5 text-gray-300">
                <MotionDiv 
                    className="py-3"
                    initial='initial'
                    animate='animate'
                    variants={varients.moveRight}
                    transition='duration: 0.3'
                >
                    <h2 className="font-bold gardient-text text-transparent">Front-end Developer</h2>
                    <p className="indent-5">
                        I'm front-end developer with experience in building responsive and optimized sites.
                    </p>
                </MotionDiv>
                <MotionDiv 
                    className="py-3"
                    initial='initial'
                    animate='animate'
                    variants={varients.moveRight}
                    transition='duration: 0.6'
                >
                    <h2 className="font-bold gardient-text text-transparent">Back-end Developer</h2>
                    <p className="indent-5"> 
                        My proficiency is at a basic level about back-end development and API, but I am actively learning and improving to gain a deeper understanding of this field.
                    </p>
                </MotionDiv>
                <MotionDiv 
                    className="py-3"
                    initial='initial'
                    animate='animate'
                    variants={varients.moveRight}
                    transition={transition.moveRight}
                >
                    <h2 className="font-bold gardient-text text-transparent">UX/UI Designer</h2>
                    <p className="indent-5">
                        I have designed multiple landing pages and have created designed system as well.
                    </p>
                </MotionDiv>
            </div>
            <div className="px-2 py-5 hidden sm:flex relative items-center justify-center justify-items-center">
                
                <div 
                    className="absolute w-[200px] h-[250px] bg-[#d9d9d9] rounded-md rotate-7"
                    initial='initial'
                    animate='animate'
                    variants={varients.moveLeft}
                    transition={transition.moveLeft}
                >
                    <Image src='/images/file1.png' alt="about image" width={180} height={180} />
                </div>
            </div>
        </div>
        

        <div className="text-center my-13">
            <h1 className="text-[23px] gardient-text capitalize">about language programming and tools</h1>
            <SkillsPage />
        </div>
        
    </section>
  )
}
export default About