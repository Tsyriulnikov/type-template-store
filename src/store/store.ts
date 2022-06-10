import {configureStore} from "@reduxjs/toolkit";
import {todosSlice} from ".././features/counter/counterSlice"

export const store = configureStore({
    reducer: {
        todos: todosSlice,
    },
})
// Выводим типы `RootState` и `AppDispatch` из самого хранилища
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch