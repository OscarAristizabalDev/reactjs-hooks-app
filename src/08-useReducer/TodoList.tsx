import { TodoItem } from "./TodoItem"


export const TodoList = ({ todos = [] }: any) => {


    return (
        <>
            <ul className="list-group">
                {
                    todos.map((todo: any) => {
                        return <TodoItem key={todo.id} todo={todo}></TodoItem>
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
