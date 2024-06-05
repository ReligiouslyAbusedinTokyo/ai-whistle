'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { usePathname, useRouter } from 'next/navigation'
import {cn} from '@/lib/utils'

type Props = {}

const LeftSidebar = (props: Props) => {
const pathname= usePathname()
const router = useRouter()

  return (
    <section className="left_sidebar">
        <nav className='flex flex-col gap-6'>
             <Link href="/" className="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center">
                <Image src="/logo.png" alt="logo"
                width={40} height={40}
                />
                <h1 className="text-15 font-extrabold
                max-lg:hidden text-white-1">AI Whistleblower</h1>
             </Link>

              {sidebarLinks.map(({route, label, imgURL})=>{
             
             const isActive = pathname=== route || pathname.startsWith(`${route}/`); 
             
             return <Link href={route} key={label} className={cn("flex gap-3 items-center py-2 max-lg:px-4 justify-center lg:justify-start",{
              'bg-nav-focus border-r-4 border-gray-1':isActive
             })}>
                      <Image src={imgURL} alt={label} width={24} height={24}/>
                      <p>{label}</p>
                    </Link>
             })} 
        </nav>


    </section>
  )
}

export default LeftSidebar