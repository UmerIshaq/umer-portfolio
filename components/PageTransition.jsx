"use client"
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React from 'react'

const PageTransition = ({children}) => {
    const pathName=usePathname();
  return (
    <AnimatePresence>
        <div key={pathName}>
          <motion.div initial={{opacity:1}} animate={{opacity:0,transition:{delay:0.4, duration:0.6, ease:"easeInOut"}}}
          className='h-screen w-screen fixed bg-primary pointer-events-none top-0'
          >

          </motion.div>
        {children}
        </div>
    </AnimatePresence>
  )
}

export default PageTransition