import { useSelector } from "react-redux"
import YoutubePlayer from "./YoutubePlayer"
import { useState } from "react";
import JoinButton from "./JoinButton";
import SubsribeButton from "./SubscribeButton";
import LikeButton from "./LikeAndDislikeButton";
import LikeAndDislikeButton from "./LikeAndDislikeButton";
import ShareButton from "./ShareButton";
import DownloadButton from "./DownloadButton";
import MoreOptionsButton from "./MoreOptionsButton";
import Description from "./Description";
import RelatedVideoCard from "./RelatedVideoCard";
import RelatedVideoCardList from "./RelatedVideoCardList";

const WatchBody = ({ video }) => {
    const channelInfoStore = useSelector(store => store.channelLogo);
    const channelLogo = useState(channelInfoStore[video.snippet.channelId])

    console.log('selected video ', video)
    return (
        <>
            <div className="m-10 p-5 w-8/12 h-[720px] rounded-lg">
                <YoutubePlayer className="" videoId={video.id} />
                <p className="text-2xl font-bold p-2 m-2">{video.snippet.title}</p>
                <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                        <img className="w-[40px] h-[40px] rounded-full" src={channelLogo[0]} alt="ChannelLogo" />
                        <div>
                            <p className="p-2 text-lg font-semibold">{video.snippet.channelTitle}</p>
                        </div>
                        <JoinButton />
                        <SubsribeButton />
                    </div>
                    <div className="flex items-center gap-3">
                        <LikeAndDislikeButton likeValue={video?.statistics?.likeCount} />
                        <ShareButton />
                        <DownloadButton />
                        <MoreOptionsButton />
                    </div>
                </div>
                <div>
                    <Description />
                </div>

            </div>
            <div>
                <RelatedVideoCardList />
            </div>
        </>
    )

}
export default WatchBody