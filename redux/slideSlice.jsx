import { createSlice } from "@reduxjs/toolkit";

const SlideSlice = createSlice({
    name: 'slide',
    initialState: {
        bar: true,
    },
    reducers: {
        handleSlide: (state, action) => {
            state.bar = action.payload
        }
    }
})

export default SlideSlice.reducer
export const { handleSlide } = SlideSlice.actions