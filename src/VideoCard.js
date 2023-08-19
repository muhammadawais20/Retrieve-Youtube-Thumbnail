import React from "react";
import getYouTubeId from "get-youtube-id";

export const VideoCard = () => {
  const url = "https://www.youtube.com/watch?v=obW-0YB64tU";
  const id = getYouTubeId(url);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className=""
      data-testid="founder-video-card"
    >
      <img
        alt="card"
        src={`https://img.youtube.com/vi/${id}/0.jpg`}
        className="w-[227px] h-[160px]"
      />
    </a>
  );
};

export default VideoCard;
