'use client'

import {NavLinks} from '@/utils/NavLinks';
import Link from "next/link"
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { MotionDiv } from '@/utils/Framer_motion';
import { varients, transition } from '@/utils/Framer_varients';

import { usePathname } from 'next/navigation';

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const pathname = usePathname()


  const toggleNav = () => {
    setNav(!nav)
  }

  const closeNav = () => {
    setNav(false)
  }

  return (
    <nav className="fixed top-0 z-50 px-16 flex justify-center w-full">
        <div className="hidden sm:flex top-0 mx-auto items-center justify-center bg-nav rounded-full w-full sm:w-[480px] p-4 gap-7">
            {
                NavLinks.map((item,index) => {

                  const isActive = pathname === item.href ? 'text-[#8FFABD] font-semibold' : ''

                  return (
                    <MotionDiv 
                      key={index}
                      initial='initial'
                      animate='animate'
                      variants={varients.moveDown}
                      transition={{
                        ...transition.moveDown,
                        delay: index * 0.3 
                      }}
                    >
                      <Link 
                        href={item.href} 
                        className={` 
                          ${isActive}  
                          hover:text-[#8FFABD]
                        `}
                      >
                        <span> {item.label} </span>
                      </Link>
                    </MotionDiv>
                       
                  )
                })
            }
        </div>

        {/* mobile */}
        <div onClick={toggleNav} className='absolute sm:hidden z-[999] top-5 right-14 flex cursor-pointer border rounded-md p-0.5'>
            { nav? <X size={30} /> : <Menu size={30} /> }    
        </div>
        <div className={`
          fixed left-0 top-0 w-full h-full bg-black/90
          transform transition-transform duration-300
          ${ nav? 'translate-x-0' : '-translate-x-full' }
          `}
        >
            <div className='flex flex-col items-center justify-center space-y-8 h-full text-2xl'>
              {
                  NavLinks.map((item,index) => {
                    return (
                        <Link key={index} href={item.href} onClick={closeNav}>
                          <span className='hover:text-emerald-500 hover:font-semibold'> {item.label} </span>
                        </Link> 
                    )
                  })
              }
            </div>
        </div>
        
    </nav>
  )
}
export default Navbar