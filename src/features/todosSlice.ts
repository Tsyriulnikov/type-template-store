import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {todolistsAPI, TodolistType} from '.././api/todolists-api';


const getTodosThunk = createAsyncThunk(
    'toodos/getTodos',
    async () => {
        const response = await todolistsAPI.getTodolists()
        return response.data
    }
)

export const todoSlice = createSlice({
    name: 'todos',
    initialState:{
        items:[
            {id:'1', addedDate:'10.06.2022',order:1, title:'First todo'}
        ] as TodolistType[]
},
    reducers:{
        addTodo:(state, action) =>{
            state.items.push(action.payload)
        },
    },
    extraReducers:(builder) => {
        builder.addCase(getTodosThunk.fulfilled, (state, action) => {
            state.items = action.payload
        })
    }
})
//то что отдаём наружу
export const todosReducer = todoSlice.reducer
export const {addTodo}= todoSlice.actions
export const todoThunks = {
    getTodosThunk
}