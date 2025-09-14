import { ThumbsDown, ThumbsUp } from "lucide-react"

const LikeAndDislikeButton = ({ likeValue = 1213 }) => {
    return (
        <div className="flex items-center">
            <div className="flex bg-gray-100 px-4 py-2 rounded-l-full gap-5 border border-r-gray-400 cursor-pointer hover:bg-gray-200">
                <ThumbsUp />
                <p className="text-md">{likeValue}</p>
            </div>
            <div className="flex bg-gray-100 px-4 py-2 rounded-r-full cursor-pointer hover:bg-gray-200">
                <ThumbsDown />
            </div>
        </div>
    )
}

export default LikeAndDislikeButton