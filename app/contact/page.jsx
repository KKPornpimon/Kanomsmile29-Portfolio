
import { MotionDiv } from "@/utils/Framer_motion"
import { transition, varients } from "@/utils/Framer_varients"
import Image from "next/image"
import Link from "next/link"

const Contact = () => {
  return (
    <section id='contact' className='mt-20'>
      <div className="text-center">
          <h1 className="text-[23px] gardient-text capitalize">contact</h1> 
          <h1 className="text-gray-300 text-[30px] font-semibold normal-case">Feel free to reach out!</h1>  
      </div>
      <div className="mt-10 flex justify-center items-center">
        <MotionDiv 
          className="contact-card"
          initial='initial'
          animate='animate'
          variants={varients.scale}
          transition={transition.scale}
        >

          <div className="img-cover">
            <Image 
              src='/images/file.png'
              alt="contact image"
              width={800}
              height={800}
              className="rounded-full object-cover absolute top-0 left-0 w-full h-full transform-3d backface-hidden"
              priority
            
            />
            <Image 
              src='/images/file1.png'
              alt="contact image"
              width={800}
              height={800}
              className="rounded-full object-cover absolute top-0 left-0 w-full h-full transform-3d backface-hidden"
              priority
            
            />
          </div>
          <div className="contact-detail">
              <h2 className="text-[25px] text-emerald-950 font-bold text-center mt-3 leading-7 sm:leading-normal">
                Pornpimon Pradabsri
              </h2>
              <h3 className="text-[20px] text-emerald-600 font-semibold text-center mt-3 sm:mt-1">
                {"<"} Kanomwarn {"/>"}
              </h3>
              <div className="mt-5">

                <div className="flex items-center hover:bg-emerald-200 rounded-md gap-4 p-2 my-2 border border-emerald-600">
                  <img src="/images/logos/github2.png" />
                  <Link href={'https://github.com/KKPornpimon'}>
                    <label className="underline underline-offset-2 cursor-pointer text-sm sm:text-base">KKPornpimon</label>
                  </Link>
                </div>

                <div className="flex items-center hover:bg-emerald-200 rounded-md gap-4 p-2 my-2 border border-emerald-600">
                  <img src="/images/logos/line.png" />
                  <label className=" text-sm sm:text-base">kanomwarnmon</label>
                </div>

                <div className="flex items-center hover:bg-emerald-200 rounded-md gap-4 p-2 my-2 border border-emerald-600">
                  <img src="/images/logos/email2.png" />
                  <Link href={'mailto:kanom7448@gmail.com'}>
                    <label className="underline underline-offset-2 cursor-pointer text-sm sm:text-base">kanom7448@gmail.com</label>
                  </Link>
                </div>

                <div className="flex items-center hover:bg-emerald-200 rounded-md gap-4 p-2 my-2 border border-emerald-600">
                  <img src="/images/logos/facebook.png" />
                  <Link href={'https://www.facebook.com/kanomwarnmon'}>
                    <label className="underline underline-offset-2 cursor-pointer text-sm sm:text-base">kanomwarnmon</label>
                  </Link>
                </div>
              </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  )
}
export default Contact