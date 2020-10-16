import React from 'react';

const VideoItem = ({video}) => {
  return (
    <div>
      <img className="ui image" 
      src={video.snippet.thumbnails.medium.url} 
      alt={video.snippet.title}/>
    </div>
  )
}

export default VideoItem;