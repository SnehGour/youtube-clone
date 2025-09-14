import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import Header from "./Header";
import SideBar from "./SideBar";
import Body from "./Body";

const Watch = () => {
  const [video, setVideo] = useState(null);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  useEffect(() => {
    console.log('UE=>videoId', videoId) 
    if (videoId) {
      fetchVideo(videoId);
    }
  }, [videoId]); 

  const fetchVideo = async (id) => {
    const FETCH_VIDEO_URL = process.env.REACT_APP_YOUTUBE_VIDEO_BY_ID_URL;
    console.log(`URL -- ${FETCH_VIDEO_URL}${id}`);
    const videoRes = await fetch(`${FETCH_VIDEO_URL}${id}`);
    const videoData = await videoRes.json();
    console.log("videoById", videoData);
    setVideo(videoData.items[0]);
  };

  return (
    <>
      <Header />
      <Body  video={video} /> {/* pass videoId down */}
    </>
  );
};

export default Watch;
