import Image from 'next/image'
import React from 'react'

type props ={
    imgURL:string,
    title : string,
    description : string
    podcastId: number
}

const Podcastcard = ({imgURL, title, description, podcastId}: props) => {
  return (
    <div className="cursor-point">
      <figure className="flex flex-col gap-2">
         <Image
          src={imgURL}
          width={174}
          height={174}
          alt={title}
          className="aspect-squre h-fit w-full rounded-md 2xl:size-[200px]"
          />
          <div className="flex flex-col">
            <h1 className="text-16 truncate font-bold text-white-1">{title}</h1>
            <h2 className="text-12 truncate font-normal capitalize text-white-4">{description}</h2>
          </div>
      </figure>
    </div>
  )
}

export default Podcastcard
