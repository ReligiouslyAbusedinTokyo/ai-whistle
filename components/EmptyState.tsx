import { EmptyStateProps } from '@/types'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

type Props = {}

const EmptyState = ({title, search, buttonLink, buttonText}: EmptyStateProps) => {
  return (
    <section className="flex-center size-full flex-col gap-3 text-white-1">
        <Image src="/icon-services-fcs.png" width={100} height={100} alt="empty state"/>
        <div className="flex-cetner w-full max-w-[254px] flex-col gap-3">
            <h1 text-16 text-center font-medium text-white-1>{title}</h1>
            {search && (
                <p className="text-16 text-center font-medium text-white-2"> 
                Try to adjust your search to find what you are interested in 
                </p>
            )}
            {buttonLink && (
                <Button className="bg-gray-3 mt-3">
                    <Link href={buttonLink} className="gap-1 flex">
                    <Image
                    src="/icons/discover.svg"
                    width={20}
                    height={20}
                    alt="discover"
                    />
                    <h1 className="text-16 font-extrabold text-white-1">{buttonText}</h1>
                    </Link>
                </Button>
            )}
        </div>
    </section>
  )
}

export default EmptyState