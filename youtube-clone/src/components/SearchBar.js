import { Search, SearchIcon } from "lucide-react"
import { useEffect, useState } from "react"
import searchSuggestion from "../api/searchSuggestion";


const SearchBar = () => {
    const [searchText, setSearchText] = useState("");
    const [suggestedSeachOnClick,setSuggestedSearchOnClick] = useState([]);

    useEffect(() => {

        // Debouncing
        const timer = setTimeout(() => handleSearch(), 200)

        return () => clearTimeout(timer);
    }, [searchText])


    const handleSearch = async () => {
        const res = await searchSuggestion(searchText)
        console.log('search', res[1]);
        setSuggestedSearchOnClick(res[1])
    }
    const handleSuggestSeach = (e) => {
        console.log('search suggestion', e.target.value);
        setSearchText(e.target.value);
    }

    const suggestedSeach = [
        "iphone 17",
        "iphone 11",
        "iphone 12",
        "iphone 13",
        "iphone 14",
        "iphone 15",
        "iphone 16",
        "iphone 17"
    ]
    // youtube searchbar
    return (
        <div className="flex flex-col w-full">
            <div className="flex w-full items-center justify-between">
                <input onChange={(e) => handleSuggestSeach(e)} className="w-full border border-gray-400 rounded-l-3xl p-2 shadow-md focus:border-blue-500 focus:outline-none" type="text" placeholder="Search" value={searchText} />
                <div className="flex justify-center w-20 border border-gray-400 rounded-r-3xl p-2 shadow-md hover:bg-gray-200 cursor-pointer">
                    <SearchIcon />
                </div>
            </div>
            {suggestedSeachOnClick.length > 0 && (
                <div className="absolute p-2 mt-11 w-[34rem] bg-white border border-gray-300 rounded-xl shadow-lg z-10">
                    {suggestedSeachOnClick.map((item, index) => (
                        <div
                            key={index}
                            className="flex gap-3 p-2 m-1 items-center hover:bg-gray-100"
                        >
                            <Search size={15} />
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchBar