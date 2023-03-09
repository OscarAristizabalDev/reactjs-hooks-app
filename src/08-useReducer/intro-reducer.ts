export { }

const initialState = [{
    id: 1,
    todo: 'Tarea a realizar 1',
    done: false,
}];

// Tipo de metodo que recibe el reducer
type todoAction = {
    type: string,
    payLoad: any
}

/**
 * Funcion que se encarga de tener las acciones a realizar en el state
 * @param state estado inicial 
 * @param action acción a realizar
 */
const todoReducer = (state = initialState, action: todoAction) => {

    if (action.type === '[TODO] add todo') {
        // ...state indica que se esta tomando los valores y con action.payLoad se agrega un nuevo valor, 
        // De esta forma se evita la mutación y se devuelve un nuevo estado
        return [...state, action.payLoad];
    }

    // Se retorna un nuevo estado
    return state;
}

// Esta accion permite obtener el estado actual
const getTodoAction = {
    type: '[TODO] get todo',
    payLoad: null
}

// Se obtiene el state actual
let todos = todoReducer(initialState, getTodoAction);

console.log(todos);

// Nueva tarea a registrar
const newTodo = {
    id: 2,
    todo: 'Tarea a realizar 2',
    done: false
}

// Esta accion permite agregar una nueva accion
const addTodoAction = {
    type: '[TODO] add todo',
    payLoad: newTodo
}


todos = todoReducer(todos, addTodoAction);

console.log(todos);