import  { configureStore } from "@reduxjs/toolkit"
import SideBarReducer from "./SideMenuSlice"
import ChannelLogoReducer from "./ChannelLogoSlice"

const appStore = configureStore({
    reducer: {
        sideBar: SideBarReducer,
        channelLogo: ChannelLogoReducer
    }
})

export default appStore