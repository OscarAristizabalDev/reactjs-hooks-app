import { useTodos } from "../hooks"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"

export const TodoApp = () => {

    const { listTodos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodos();

    return (
        <>
            <h1>TodoApp: {todosCount}, <small>pendientes: {pendingTodosCount}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {
                        // Como desde el componenete Hijo TodoList se notifico desde la funcion onDeleteTodo, automaticamente se notifica la funciona handleDeleteTodo
                        <TodoList todos={listTodos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
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
