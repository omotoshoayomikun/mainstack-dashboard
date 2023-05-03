import { configureStore } from "@reduxjs/toolkit";
import SlideSlice from "./slideSlice";

export default configureStore({
    reducer: {
        slide: SlideSlice
    }
})