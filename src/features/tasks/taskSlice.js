import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
    const response = await axios.get("https://task-list-hw-server-student-neog-ca.replit.app/tasks");
    return response.data;
});

export const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        taskData: [],
        status: "idle",
        error: "null"
    },
    reducers: {
        toggleTaskStatus: (state, action) => {
            const { dayIndex, taskId } = action.payload;
            const day = state.taskData.tasks[dayIndex];  
            if (day) {
                const task = day.tasks.find(task => task.taskId === taskId);
                if (task) {
                    task.taskStatus = task.taskStatus === "Completed" ? "Pending" : "Completed";
                }
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTasks.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            state.status = "success";
            state.taskData = action.payload;
        });
        builder.addCase(fetchTasks.rejected, (state, action) => {
            state.status = "error";
            state.error = action.error.message;
        });
    }
});

export const { toggleTaskStatus } = taskSlice.actions;
export default taskSlice.reducer;
