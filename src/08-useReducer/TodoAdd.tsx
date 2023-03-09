import { useForm } from "../hooks"

export const TodoAdd = ({ agregarNewTodo }: any) => {

    // UseForm es un custom hook, que permite manejar el formulario
    // este formulario solo va a recibir el un objeto con el campo descripción
    const { description, onCambiarInput, onResetForm }: any = useForm({
        description: ''
    });

    const onFormSubmit = (event: any) => {
        event.preventDefault();

        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime() * 3,
            description,
            done: false,
        }

        // al invocar este metodo, se envía el nuevo todo al componente padre
        agregarNewTodo(newTodo);
        onResetForm();
    }

    return (
        <>
            <form onSubmit={(event) => onFormSubmit(event)}>
                <input
                    type="text"
                    placeholder="¿Queé hay que hacer?"
                    className="form-control"
                    name="description"
                    value={description}
                    onChange={(event) => onCambiarInput(event)}
                />

                <button
                    type="submit"
                    className="btn btn-outline-primary mt-2"
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
