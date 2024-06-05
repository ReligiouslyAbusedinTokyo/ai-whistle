"use client";
import React from 'react'

 import { podcastData } from '@/constants'
import Podcastcard from '@/components/PodcastCard';



 import { useQuery } from "convex/react";
 import { api } from "@/convex/_generated/api";


const Home = () => {

  console.log(podcastData)
  {/* from convex */}
 // const tasks = useQuery(api.tasks.get);

  return (
    <div className="mt-9 flex flex-col gap-6">
      <section className='flex flex-col gap-6'>
         <h1 className="text-18 font-bold text-white-1">Trendin Podcast</h1>
          {/* from convex */}
         <div className="flex min-h-screen flex-col items-center justify-between p-24 text-white-1">
        {/* {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}  */}
          </div>

          <div className="podcast_grid">

    
           
            {podcastData.map(({id, title, description, imgURL})=>(
            <Podcastcard
            key={id}
            imgURL={imgURL}
            title={title}
            description={description}
            podcastId={id}
            />
          ))}  
          </div>

        
      </section >

    </div>
  )
}

export default Home