import {createSlice} from "@reduxjs/toolkit";

let nextTodoId = 0;

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo(state, action) {
            state.push({ id: nextTodoId++,
                         textDate : action.payload,
                         textTime : action.payload,
                         text : action.payload, 
                         content : action.payload, 
                         completed: false })
        },
        toggleTodo(state, action) {
            const todo = state.find(todo => todo.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed
            }
        }
    }
})


export const {addTodo,toggleTodo} = todoSlice.actions

export default todoSlice.reducer