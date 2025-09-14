import { useEffect, useState } from "react"
import { fetchYoutubeHomeVideos } from "../api/fetchVideos"
import RelatedVideoCard from "./RelatedVideoCard"

const RelatedVideoCardList = () => {
    const [relatedVideos, setRelatedVideos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchYoutubeHomeVideos();
            setRelatedVideos(data.items);
            console.log('data', data);
        }
        fetchData();
    }, [])
    return (
        <>
            {relatedVideos.map((video) => <RelatedVideoCard videoInfo={video} />)}
        </>
    )
}

export default RelatedVideoCardList