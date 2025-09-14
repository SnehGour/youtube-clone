import YouTube from "react-youtube";
import { useRef } from "react";

const YouTubePlayer = ({ videoId }) => {
  const playerRef = useRef(null);

  const opts = {
    width: "100%",
    height: "720",
    playerVars: {
      autoplay: 1,
    },
  };

  // When videoId changes, swap video inside the existing player


  return (
    <div className="w-full">
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={(event) => {
          playerRef.current = event.target; // save reference to YouTube player
        }}
      />
    </div>
  );
};

export default YouTubePlayer;
