
export const TodoItem = ({ todo, onRemoveTodo }: any) => {

    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="align-self-center">{todo.description}</span>
            {/* Cuando se ejecute la funcion onRemoveTodo se notifica al componente padre TodoList*/}
            <button className="btn btn-danger" onClick={ () => onRemoveTodo(todo.id) }>Borrar</button>
        </li>
    )
}
