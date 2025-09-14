import SideBar from "./SideBar"
import MainContainer from "./MainContainer"
import { useSelector } from "react-redux";
import WatchBody from "./WatchBody";

const Body = ({ video = null }) => {
    console.log('bodudy', video)    
    const isOpen = useSelector(store => store.sideBar.isOpen);

    return (
        <div className="flex">
            {isOpen && <SideBar />}
            {video == null? <MainContainer /> : <WatchBody video={video} />}
        </div>)
}

export default Body