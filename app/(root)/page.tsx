"use client";
import React from 'react'

 import { podcastDataAlternative } from '@/constants'
import Podcastcard from '@/components/PodcastCard';



 import { useQuery } from "convex/react";
 import { api } from "@/convex/_generated/api";


const Home = () => {

  console.log(podcastDataAlternative)
  {/* from convex */}
 // const tasks = useQuery(api.tasks.get);

 const getTrendingPodcasts = useQuery(api.podcasts.getTrendingPodcasts)

  return (
    <div className="mt-9 flex flex-col gap-6">
      <section className='flex flex-col gap-6'>
         <h1 className="text-18 font-bold text-white-1">Trendin Podcast</h1>
        
         <div className="podcast_grid">
            {/* // TO DO this needs to be connect with convex db after taking open ai secret key   */}
            {getTrendingPodcasts?.map(({_id, podcastTitle, podcastDescription, imageUrl})=>(
            <Podcastcard
            key={_id}
            imgUrl={imageUrl}
            title={podcastTitle}
            description={podcastDescription}
            podcastId={_id}
            />
          ))}  
          </div>

          {/* <div className="podcast_grid">
          
            {podcastDataAlternative.map(({id, title, description, imgURL})=>(
            <Podcastcard
            key={id}
            imgURL={imgURL}
            title={title}
            description={description}
            podcastId={id}
            />
          ))}  
          </div> */}
      </section >
    </div>
  )
}

export default Home