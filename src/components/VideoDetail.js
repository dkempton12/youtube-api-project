import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading Video...</div>;
  }
  // grabbing each selected video's URL
  const videoURL = `https://www.youtube.com/embed/${video.id.videoId}`;
return (
  <div>
  <div className="ui embed">
    <iframe src="videoURL" title="Video Player"/>
  </div>
  <div className="ui segment">
    <h4 className="ui header">{video.snippet.title}</h4>
    <p>{video.snippet.description}</p>
  </div>
  </div>
);
};

export default VideoDetail;