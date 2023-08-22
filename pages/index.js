import Image from 'next/image'
import { Inter } from 'next/font/google'
import Herosection1 from '@/Component/Herosection1'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   <div className='w-screen h-screen bg-slate-400'>
      <Herosection1/>
   </div>
   </>
  )
}
