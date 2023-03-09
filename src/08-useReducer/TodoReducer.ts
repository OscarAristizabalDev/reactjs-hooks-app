
export const todoReducer = (initialState: any, action: any) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            // Se toman las valores actuales, y se asigna un nuevo todo (actividad)
            return [...initialState, action.payload]
        default:
            return initialState;
    }
}
