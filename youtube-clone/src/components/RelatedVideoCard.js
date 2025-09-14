const RelatedVideoCard = ({ videoInfo }) => {
    console.log('releated cideo', videoInfo)

    const img = videoInfo?.snippet?.thumbnails?.high?.url
    const title = videoInfo?.snippet?.title
    const channelTitle = videoInfo?.snippet?.channelTitle
    const viewCount = videoInfo?.statistics?.viewCount
    const duration = videoInfo?.contentDetails?.duration


    return (
        <div className="flex gap-2 w-full mb-2">
            <img src={img} alt="relatedVideo" className="w-[200px] rounded-xl" />
            <div className="flex flex-col my-2 py-2 gap-2">
                <p className="text-sm font-semibold">{title}</p>
                <p className="text-sm">{channelTitle}</p>
                <div className="flex gap-2">
                    <p className="text-sm">{viewCount}</p>
                    <p className="text-sm">{duration}</p>
                </div>
            </div>
        </div>
    )
}
export default RelatedVideoCard