import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
    const response = await axios.get("https://todolist-2-ll03.onrender.com/todoList");
    return response.data;
});

export const addTaskAsync = createAsyncThunk("tasks/addTask", async (task) => {
    const response = await axios.post("https://todolist-2-ll03.onrender.com/todoList", task);
    return response.data;
});

export const deleteTaskAsync = createAsyncThunk("tasks/deleteTask", async (id) => {
    await axios.delete(`https://todolist-2-ll03.onrender.com/todoList/${id}`);
    return id;
});

const taskSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTasks.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(addTaskAsync.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(deleteTaskAsync.fulfilled, (state, action) => {
                return state.filter((task) => task.id !== action.payload);
            });
    }
});

export default taskSlice.reducer;
