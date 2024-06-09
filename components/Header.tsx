import Link from 'next/link';
import React from 'react'
import { cn } from '@/lib/utils';

type Props = {}

const Header = ({headerTitle, titleClassName}:{headerTitle?: string; titleClassName?:string}) => {
  return (
    <header className="flex items-center justify-between">
        {headerTitle?(
            <h1 className={cn('text-16 font-bond text-white-1', titleClassName)}>{headerTitle}</h1>
        ): <div/>}

        <Link href="/discover" className="text-16 fond-semibold text-gray-3">
        See all
        </Link>

    </header>
  )
}

export default Header