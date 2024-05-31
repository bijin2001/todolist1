import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./Slice/taskSlice";

const tasksStore = configureStore({
    reducer: {
        tasks: taskSlice
    }
});

export default tasksStore;
