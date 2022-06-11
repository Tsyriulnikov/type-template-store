import React from 'react';
import {useAppDispatch, useAppSelector} from "./app/hooks";
import {addTodo, todoThunks} from "./features/todosSlice";


export const App = () => {
    //const dispatch = useDispatch()
    //переопределили и типизировали useDispatch в hooks.ts
    const dispatch = useAppDispatch()
    //переопределили и типизировали useSelector в hooks.ts
    const todos = useAppSelector(state => state.todos)
    const getTodosHandler = () => {
        dispatch(todoThunks.getTodosThunk())
    }
    const addTodoHandler = () => {
        const newTodo = {id: Math.random(), addedDate: '11.06.2022', order: 1, title: 'Other toto'}
        dispatch(addTodo(newTodo))
    }

    return (
        <div className="App">
            <h1>Todos</h1>
            <div style={{display: 'flex'}}>
                {todos.items.map((tl) => {
                    return (
                        <div key={tl.id}
                             style={{border: '2px solid black', padding: '10px', width: '200px', margin: '20px'}}>
                            <p>title: {tl.title}</p>
                            <p>addedDate: {tl.addedDate}</p>
                            <p>order: {tl.order}</p>
                            <p>id: {tl.id}</p>
                        </div>
                    )
                })}
            </div>
            <button onClick={addTodoHandler}>Add todolist</button>
            <button onClick={getTodosHandler}>Get todos</button>
        </div>
    );
}

export default App;
