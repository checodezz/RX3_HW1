import { createSlice, nanoid } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        taskData: [
            {
                id: nanoid(),
                date: " 15/7/2024",
                tasks: [
                    {
                        taskName: "Get groceries from the market",
                        status: "Pending"
                    }, {
                        taskName: " Go to Gym"
                        , status: "Completed"
                    }, {
                        taskName: "Water the plants",
                        status: "Completed"
                    }],


            },
            {
                id: nanoid(),
                date: "16/07/2024",
                tasks: [
                    {
                        taskName: "Go to the park",
                        status: "Completed"
                    }
                    , {
                        taskName: "Get my room cleaned",
                        status: "Pending"
                    }]
            }
        ]
    },
    reducers: {}
})

export default taskSlice.reducer