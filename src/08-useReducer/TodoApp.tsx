import { useEffect, useReducer } from "react"

import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"
import { todoReducer } from "./TodoReducer"

const initialState: any = []

// Obtenemos los valores que estan en el localStorage para la persistencia de datos
const init = () => {
    //let localTodos: any = localStorage.getItem('todos');
    //return localTodos !== null ? JSON.parse(localStorage.getItem('todos')) : [];


    // Si no hay valores, devolve un array vacio
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {

    // useReducer es un hook de react, para manejar el estado
    // en esta caso, se va a manejar el estado de el listado de tareas
    // recibe un reduce (encargado de los eventos "elimina, agregar...")
    // initialState => también recibe un estado inicial
    // recibe un tercer argumente que permite indicar los valore sinciales
    const [listTodos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(listTodos))

    }, [listTodos]) // cuando los todos cambian se ejecuta el efecto y se modifica el local storage


    // Este metodo es invocado desde el componente hijo 
    const handleNewTodo = (todo: any) => {
        // Acción donde se envía un objeto con el nuevo todo
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        // Se despacha la acción, es decir, se ejecuta 
        dispatch(action);
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
