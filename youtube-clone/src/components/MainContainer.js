import { useEffect, useState } from "react"
import ButtonList from "./ButtonList"
import VideoContainer from "./VideoContainer"
import { useDispatch } from "react-redux";
import {add} from "../store/ChannelLogoSlice"

const MainContainer = () => {
    const [videos, setVideos] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchYoutubeHomeVideos();
    }, [])

    const fetchYoutubeHomeVideos = async () => {
        const url = process.env.REACT_APP_YOUTUBE_VIDEO_URL;
        const API_KEY = process.env.REACT_APP_YOUTUBE_KEY

        const res = await fetch(`${url}`);
        const data = await res.json();
        //setVideos(data.items);

        // Getting channel Unique Id
        const channelIds = [
            ...new Set(data.items.map((item) => item.snippet.channelId))
        ]

        // Fetch channel in single go
        const channelRes = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelIds.join(
                ","
            )}&key=${API_KEY}`);
        const channel = await channelRes.json();

        const channelLogoMap = {};
        channel.items.forEach((ch) => {
            channelLogoMap[ch.id] = ch.snippet.thumbnails.default.url
        })
        console.log('channelDict', channelLogoMap);
        dispatch(add(channelLogoMap))

        const enrichedVideos = data.items.map((video) => ({
            ...video,
            channelLogo: channelLogoMap[video.snippet.channelId]
        }))

        console.log('enrichedVideos', enrichedVideos);
        setVideos(enrichedVideos)
    }

    return <div>
        <ButtonList />
        <div className="flex flex-wrap gap-2 justify-around">
            {videos.length > 0 && videos.map((video) => <VideoContainer className="border border-gray-200 bg-gray-500" key={video.id} videoInfo={video} />)}
        </div>
    </div>
}

export default MainContainer