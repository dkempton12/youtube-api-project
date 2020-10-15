import React from 'react';

const VideoList = ({videos}) => {
  const renderedVideos = videos.map(video => {
  return <li>{video}</li>;
  })
  return (
    <div>
      {renderedVideos}
      </div>
  );
}

export default VideoList;