import { CircleUser, Menu, Mic } from "lucide-react"
import SearchBar from "./SearchBar"
import { useDispatch, useSelector } from "react-redux"
import { toggleSideMenu } from "../store/SideMenuSlice"
import { useNavigate } from "react-router"

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const menu = useSelector(store => store.sideBar.isOpen);

    const handleMenuToggle = () => {
        dispatch(toggleSideMenu(!menu))
    }
    return (
        <div className="flex p-2 items-center justify-between shadow-md">
            <div className="flex justify-center items-center gap-5">
                <Menu className="cursor-pointer" onClick={() => handleMenuToggle()} />
                <img className="h-14 cursor-pointer" src="/logo.png" alt="youtube-logo" onClick={() => navigate("/")}/>
            </div>
            <div className="flex items-center w-1/2 justify-center gap-5">
                <SearchBar />
                <div className="bg-gray-200 p-2.5 rounded-full hover:bg-gray-300 cursor-pointer">
                    <Mic />
                </div>
            </div>

            <CircleUser />
        </div>)
}

export default Header