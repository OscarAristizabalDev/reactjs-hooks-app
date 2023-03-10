
export const todoReducer = (initialState: any, action: any) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            // Se toman las valores actuales, y se asigna un nuevo todo (actividad)
            return [...initialState, action.payload]

        case '[TODO] Remove Todo':
            // Filter genera un nuevo arreglo, por lo tanto se puede utilizar ya que no hace una mutación
            return initialState.filter((todo: any) => todo.id !== action.payload)

        case '[TODO] Toggle Todo':
            // Map genera un nuevo arreglo, por lo tanto se puede utilizar ya que no hace una mutación
            return initialState.map((todo: any) => {

                if (todo.id === action.payload) {
                    return {
                        ...todo, // se obtiene todos los atributos del objeto
                        done: !todo.done // se cambio su valor, si estaba en true se pasa false, y viceversa
                    }
                }
                return todo;
            })
        default:
            return initialState;
    }
}
