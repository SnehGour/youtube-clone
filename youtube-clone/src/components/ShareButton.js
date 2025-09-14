import { Forward } from "lucide-react"

const ShareButton = () => {
    return (
        <div className="bg-gray-100 px-4 py-3 rounded-3xl flex gap-2 hover:bg-gray-200 cursor-pointer">
            <Forward />
            <p className="font-semibold">Share</p>
        </div>
    )
}

export default ShareButton