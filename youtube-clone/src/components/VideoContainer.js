import { EllipsisVerticalIcon } from "lucide-react"
import { useNavigate } from "react-router"

const VideoContainer = ({ videoInfo }) => {
    const navigate = useNavigate();

    const handleClick=(id)=>{
        console.log('clicked', id)
        navigate(`/watch?v=${id}`)
    }
    console.log('VideoInfo', videoInfo)
    return (
        <div className="w-[400px] h-[450px] p-2 cursor-pointer" onClick={()=>handleClick(videoInfo?.id)}>
            <img className="rounded-lg" src={videoInfo?.snippet?.thumbnails?.high?.url} ></img>
            <div className="flex py-2">
                <div className="w-[60px] h-[60px] p-3">
                    <img className="rounded-full" src={videoInfo?.channelLogo}></img>
                </div>
                <div className="flex flex-col p-2 gap-2">
                    <p className="font-bold">{videoInfo?.snippet?.title}</p>
                    <p className="text-sm">{videoInfo?.snippet?.channelTitle}</p>
                    <div className="flex">
                        <p className="text-sm">{videoInfo?.statistics?.viewCount} Views</p> <p className="px-2">{"  "}</p>
                    </div>
                </div>
                <EllipsisVerticalIcon className="p-1 cursor-pointer hover:border rounded-full hover:bg-gray-100" />
            </div>
        </div>
    )
}

export default VideoContainer