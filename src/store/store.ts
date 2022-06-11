import {configureStore} from "@reduxjs/toolkit";
import {todosReducer} from "../features/todosSlice";

//Вызываем configureStore и ередаём туда редьюсер
//можно добавить middleware/ thank идёт по умолчанию. добавлять не надо
export const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
})

// Выводим типы `RootState` и `AppDispatch` из самого хранилища
//Rootstate типизация State всего приложения
export type RootState = ReturnType<typeof store.getState>
//Типизация Dispatch
export type AppDispatch = typeof store.dispatch

// A Redux store returned by configureStore()
// Supports dispatching side-effectful thunks in addition to plain actions.