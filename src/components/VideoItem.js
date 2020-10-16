import React from 'react';

const VideoItem = () => {
  return (
    <div>
      <img className="ui image" 
      src={video.snippet.thumbnails.medium.url} 
      alt={video.snippet.title}/>
    </div>
  )
}