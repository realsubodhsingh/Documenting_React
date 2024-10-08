import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id:1, text:"Hello World"}]
}

// step1
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state, action)=>{
            const todo = { 
                id: nanoid(),
                text: action.payload   // payload can give you id, email or something like that.
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) =>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
    }
})

// step2
export const {addTodo, removeTodo}= todoSlice.actions
export default todoSlice.reducer