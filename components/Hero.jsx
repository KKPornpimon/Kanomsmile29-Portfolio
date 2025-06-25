'use client'

import { MotionButton, MotionImage } from "@/utils/Framer_motion"
import { transition, varients } from "@/utils/Framer_varients"
import { DownloadIcon } from "lucide-react"
import Link from "next/link"

const Hero = () => {
  return (
    <div id="home" className=" flex flex-col items-center justify-center my-20">
      <div className="relative top-0 bg-[#d9d9d9] w-[160px] h-[160px] rounded-full mt-5 mb-9">
          <div className="absolute overflow-hidden top-[-80px] left-[-53px] w-[260px] h-auto animate-wiggle">
              <MotionImage 
              src='/images/file.png'
              alt="image profile" 
              width={400}
              height={400}
              priority 
              className="w-auto"
              initial='initial'
              animate='animate'
              variants={varients.scale}
              transition={transition.scale}
          />
          </div>   
      </div>
      <div className="text-center font-bold text-2xl sm:text-3xl md:text-4xl mt-10 mb-5 text-gray-300">
          <h1>Hello I'm {"<"} <span className="text-[#8FFABD]">Kanomwarn</span> {"/>"}</h1>
          <h2 className="sm:pt-2">Front-end Developer</h2>
      </div>
      <p className="text-gray-300 w-full sm:w-[80%] text-center">
        I am seeking a position as a Front-end Developer. 
        I have experience in building web applications using 
        <span className="textHighlight"> React.js </span> , 
        <span className="textHighlight"> Next.js </span> , 
        <span className="textHighlight"> Tailwind CSS </span> , 
        <span className="textHighlight"> Node.js </span> , 
        and other related 
        technologies.  I have basic knowledge about Back-end 
        and learning 
        <span className="textHighlight"> Supabase </span> ,
        <span className="textHighlight"> Express </span> ,
        <span className="textHighlight"> Clerk </span> ,
        <span className="textHighlight"> Typescript </span> ,
        to increase 
        my ability. Ready to learn jobs and other relevant 
        knowledge. I am highly motivated and passionate about 
        this role. I continuously enhance my skills and actively 
        improve myself to excel in this position. 
        I look forward to receiving the opportunity to work with you.
      </p>

      <div className="text-center flex flex-col sm:flex-row">
            <div className="my-5 mx-2">
                <Link 
                  href='/images/Resume Pornpimon Pradabsri_FED_.pdf'
                  target="_blank"
                >
                    
                    <MotionButton
                        
                        className="
                            flex py-1.5 px-3 font-semibold transition
                            relative capitalize cursor-pointer
                            rounded-full bg-[#8FFABD] text-[#0C1821]
                            hover:bg-[#86C8B7] 
                        "
                        initial='initial'
                        animate='animate'
                        variants={varients.moveUp}
                        transition={transition.moveUp}
                        whileHover={{ scale: 0.95 }}
                    > 
                        <DownloadIcon className="mr-2" size={20} />

                        download resume
                        
                    </MotionButton>
                </Link>
            </div>
            
        </div>
    </div>
  )
}
export default Hero