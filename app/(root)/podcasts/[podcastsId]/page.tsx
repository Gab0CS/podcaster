import React from 'react'

const PodcastsDetails = ({ params }: {params: { podcastsId: string}}) => {
  return (
    <p className="text-white-1">
        PodcastsDetails for {params.podcastsId}
    </p>
  )
}

export default PodcastsDetails
