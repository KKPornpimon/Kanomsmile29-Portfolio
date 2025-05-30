import Link from "next/link"
import { Button } from "./ui/button"
import { LinkIcon } from "lucide-react"
import { ProjectsExperienceData } from "@/utils/Projects"
import Image from "next/image"

const CardExpeience = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-7 sm:gap-x-5 mt-5">
        
        {
            ProjectsExperienceData.map((item) => {
                return (
                    <div className="card shadow-md shadow-emerald-700" key={item.id}>
                        <div className={`face face1`}>
                            <Image src={item.picture} alt={item.title} width={700} height={700} className="w-full h-full rounded-md object-cover" priority />
                            <div className="content">
                                <h2 className="
                                        text-emerald-700 font-semibold text-center text-[20px] uppercase
                                        bg-conic/decreasing from-[var(--gardient-from)] via-[var(--highlight)] to-[var(--gardient-to)]
                                        w-full absolute inset-x-0 bottom-0 py-1.5 rounded-bl-md rounded-br-md
                                    ">
                                        {item.title}
                                </h2>
                            </div>
                        </div>
                        <div className="relative face face2">
                            <div className="content">
                                <ul className="leading-5 ml-5">
                                    {
                                        item.detail.map((e, index) => {
                                            return (
                                                <li className="list-disc text-[14px]" key={index}> {e} </li>           
                                            )
                                        })
                                    }  
                                </ul>
                                
                                <p className="leading-5"></p>
                                <div className="flex flex-wrap gap-1 my-2 text-[11px]">
                                    {
                                        item.skills.map((skill,index) => {
                                            return (
                                                <label htmlFor="html" className="bg-[var(--gardient-to)] px-1 rounded" key={index}> {skill} </label>
                                            )
                                        })
                                    }
                                </div>
                                <div className="absolute inset-x-0 bottom-3 flex justify-center items-center">  
                                    {
                                        item.url !== '' ? (
                                            <Link href={item.url} target="_blank" className="text-center">
                                        
                                                <Button className={`
                                                        border-1 border-emerald-800 hover:bg-emerald-700 
                                                        hover:text-white cursor-pointer px-3 py-1 me-2`} size='small'
                                                > 
                                                    <LinkIcon size={40} />Website 
                                                </Button>
                                            </Link>
                                        ) : ''
                                    }
                                    
                                </div>
                            
                            </div>
                        </div>
                    </div> 
                )
            })
        }
        

        
    </div>
  )
}
export default CardExpeience