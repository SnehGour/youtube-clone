import { createSlice } from "@reduxjs/toolkit";

const ChannelLogoSlice = createSlice({
  name: "channelLogo",
  initialState: {},
  reducers: {
    add: (state, action) => {
      // action.payload is an object like { UC123: "logo1.png", UC456: "logo2.png" }
      Object.entries(action.payload).forEach(([channelId, logoUrl]) => {
        state[channelId] = logoUrl;
      });
    },
  },
});

export const { add } = ChannelLogoSlice.actions;
export default ChannelLogoSlice.reducer;
