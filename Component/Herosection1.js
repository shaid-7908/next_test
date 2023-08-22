'use client'
import React from 'react'
import {motion} from 'framer-motion'
// import Navbar from './Navbar'
import Link from 'next/link'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import TransitionPage from './Transition'
import { useRouter } from 'next/navigation'
import Particles1 from './Particles'
import Image from 'next/image'
// import Profile from '../Images/Profile.jpg'

export default function Herosection1() {
    const [show,setShow] = useState(false)
    const router = useRouter()
  return (
    <>
    <div className='herosectionBg'>
      
    </div>
    
    </>
        
  )
}
