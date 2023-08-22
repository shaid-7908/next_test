import React from 'react'
import { motion } from 'framer-motion'
const transitionVariants = {
    initial:{
        x:'100%',
        width:'100%'
    },
    animate:{
        x: '0%',
        width: '0%'
    },
    exit:{
        x:['0%','100%'],
        with:['0%','100%']
    }
}

export default function TransitionPage() {
  return (
    <>
    <motion.div className='fixed top-0 bottom-0 right-full w-screen justify-center items-center h-screen z-50 bg-gradient-to-r from-blue-800 to-blue-500'
    variants={transitionVariants} 
    initial="initial"
    animate="animate"
    transition={{delay:0.2,duration:0.6,ease:'easeInOut'}}
    >
   

    </motion.div>

     <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-gradient-to-r from-blue-700 to-blue-500'
    variants={transitionVariants} 
    initial="initial"
    animate="animate"
    transition={{delay:0.4,duration:0.6,ease:'easeInOut'}}
    ></motion.div>

     <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#ccf381]'
    variants={transitionVariants} 
    initial="initial"
    animate="animate"
    transition={{delay:0.6,duration:0.6,ease:'easeInOut'}}
    ></motion.div>
    </>
  )
}
