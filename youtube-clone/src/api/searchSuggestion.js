const searchSuggestion = async (query) => {
    const URL = process.env.REACT_APP_YOUTUBE_SEARCH_SUGGESTION

    console.log(`URL is  ${URL}${query}`)
    const res = await fetch(`${URL}${query}`);
    const data = await res.json();
    return data;
}

export default searchSuggestion