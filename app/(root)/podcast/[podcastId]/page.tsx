import React from 'react'



const PodcastDetails = ({params}:{params:{podcastId:string}}) => {
  console.log(params.podcastId)
    return (
    <p className="text-white-1">Podcast detail is for {params.podcastId}</p>
  )
}


export default PodcastDetails