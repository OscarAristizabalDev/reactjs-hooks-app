import { TodoItem } from "./TodoItem"


export const TodoList = ({ todos = [] , onDeleteTodo, onToggleTodo }: any) => {

    return (
        <>
            <ul className="list-group">
                {
                    todos.map((todo: any) => {
                        // Como desde el componente hijo TodoItem se notifico medianta la funciona onRemoveTodo esta inmediatamente ejecuta la funcion onDeleteTodo y notifica
                        // al componente padre TodoApp
                        return <TodoItem key={todo.id} todo={todo} onRemoveTodo={(id: any) => onDeleteTodo(id)} onMarkDone={(id: any) => onToggleTodo(id)}></TodoItem>
                    })
                }
            </ul>
        </>
    )
}

type TodoListProps = {
    id: number,
    description: '',
    done: false
}
