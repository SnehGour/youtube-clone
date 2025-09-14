export const fetchYoutubeHomeVideos = async () => {
    const url = process.env.REACT_APP_YOUTUBE_VIDEO_URL;
    const API_KEY = process.env.REACT_APP_YOUTUBE_KEY

    const res = await fetch(`${url}`);
    const data = await res.json();
    //setVideos(data.items);
    console.log('fetch video API', data.items);
    return data;
}