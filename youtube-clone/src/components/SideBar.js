import { Home, Layers2, MailCheck, Music2 } from "lucide-react"

const SideBar = () => {
    return (
        <div className="flex flex-col gap-5 p-2 w-1/12 bg-gray-50">
            <div className="flex justify-start p-2 gap-3">
                <Home />
                <p>Home</p>
            </div>
            <div className="flex justify-start p-2 gap-3">
                <Layers2 />
                <p>Shorts</p>
            </div>
            <div className="flex justify-start p-2 gap-3">
                <MailCheck />
                <p>Subscriptions</p>
            </div>
            <div className="flex justify-start p-2 gap-3">
                <Music2 />
                <p>Youtube Music</p>
            </div>
            <div className="flex justify-start p-2 gap-3">
                <Home />
                <p>Home</p>
            </div>
            <div className="flex justify-start p-2 gap-3">
                <Layers2 />
                <p>Shorts</p>
            </div>
            <div className="flex justify-start p-2 gap-3">
                <MailCheck />
                <p>Subscriptions</p>
            </div>
            <div className="flex justify-start p-2 gap-3">
                <Music2 />
                <p>Youtube Music</p>
            </div>
            <div className="flex justify-start p-2 gap-3">
                <Home />
                <p>Home</p>
            </div>
            <div className="flex justify-start p-2 gap-3">
                <Layers2 />
                <p>Shorts</p>
            </div>
            <div className="flex justify-start p-2 gap-3">
                <MailCheck />
                <p>Subscriptions</p>
            </div>
            <div className="flex justify-start p-2 gap-3">
                <Music2 />
                <p>Youtube Music</p>
            </div>
        </div>
    )
}

export default SideBar