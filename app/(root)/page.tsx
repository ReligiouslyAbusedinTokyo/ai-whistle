"use client";
import React from 'react'

 import { products } from '@/constants'
import Podcastcard from '@/components/PodcastCard';



 import { useQuery } from "convex/react";
 import { api } from "@/convex/_generated/api";
import { HeroParallax } from '@/components/ConnectParallex';





const Home = () => {

  
  {/* from convex */}
 // const tasks = useQuery(api.tasks.get);

 const getTrendingPodcasts = useQuery(api.podcasts.getTrendingPodcasts)

  return (
    <div className="mt-9 flex flex-col gap-6">
      <section className='flex flex-col gap-6'>
         <h1 className="text-18 font-bold text-white-1">Trendin Podcast</h1>
        
        <section>
          <HeroParallax products={products}></HeroParallax>
          <div className="text-18 font-bold mt-5 text-white-1">Trending Podcasts </div>
        </section>

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