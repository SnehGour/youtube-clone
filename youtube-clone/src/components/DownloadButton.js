import { ArrowDownToLine } from "lucide-react"

const DownloadButton = () =>{
    return (
        <div className="bg-gray-100 px-4 py-3 rounded-3xl flex gap-2 hover:bg-gray-200 cursor-pointer ">
            <ArrowDownToLine/>
            <p className="font-semibold">Download</p>
        </div>
    )
}

export default DownloadButton