import { useReducer } from "react"

import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"
import { todoReducer } from "./TodoReducer"

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Tarea 1',
        done: false
    },
    {
        id: new Date().getTime() * 3,
        description: 'Tarea 2',
        done: false
    },
]

export const TodoApp = () => {

    // useReducer es un hook de react, para manejar el estado
    // en esta caso, se va a manejar el estado de el listado de tareas
    // recibe un reduce (encargado de los eventos "elimina, agregar...")
    // también recibe un estado inicial
    const [listTodos, dispatch] = useReducer(todoReducer, initialState)

    // Este metodo es invocado desde el componente hijo
    const handleNewTodo = (todo: any) => {
        console.log(todo)
    }

    return (
        <>
            <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {
                        <TodoList todos={listTodos} />
                    }
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd agregarNewTodo={handleNewTodo} />
                </div>
            </div>

        </>
    )
}
