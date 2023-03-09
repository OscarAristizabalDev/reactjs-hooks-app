
export const todoReducer = (initialState: any, action: any) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            // Se toman las valores actuales, y se asigna un nuevo todo (actividad)
            console.log(action.payload)
            return [...initialState, action.payload]

        case '[TODO] Remove Todo':
            console.log('entro', action.payload)
            // Filter genera un nuevo arreglo, por lo tanto se puede utilizar ya que no hace una mutación
            return initialState.filter((todo: any) => todo.id !== action.payload)
        default:
            return initialState;
    }
}
