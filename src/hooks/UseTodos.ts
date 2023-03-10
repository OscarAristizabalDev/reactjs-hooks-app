import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/TodoReducer"


// Obtenemos los valores que estan en el localStorage para la persistencia de datos
const init = () => {
    //let localTodos: any = localStorage.getItem('todos');
    //return localTodos !== null ? JSON.parse(localStorage.getItem('todos')) : [];

    // Si no hay valores, devolve un array vacio
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodos = () => {


    // useReducer es un hook de react, para manejar el estado
    // en esta caso, se va a manejar el estado de el listado de tareas
    // recibe un reduce (encargado de los eventos "elimina, agregar...")
    // initialState => también recibe un estado inicial, el initialState es el equivalente al listTodos, es decir, cuando se modifique el initialState se cambiar el listTodos
    // recibe un tercer argumente que permite indicar los valore sinciales
    const [listTodos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(listTodos))

    }, [listTodos]) // cuando los todos se modifique se ejecutar el efecto y se modifica el local storage


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

    // Este metodo es invocado desde el componente hijo 
    const handleDeleteTodo = (id: any) => {
        //console.log({id})
        // Acción donde se envía el id para eliminarlo del listado
        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        }
        // Se despacha la acción, es decir, se ejecuta 
        dispatch(action);
    }

    // Este metodo es invocado desde el componente hijo
    const handleToggleTodo = (id: any) => {
        // Acción donde se envía el id para eliminarlo del listado
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        }
        // Se despacha la acción, es decir, se ejecuta 
        dispatch(action);
    }

    return {
        listTodos,
        todosCount: listTodos.length,
        pendingTodosCount: listTodos.filter((todo: any) => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }
}