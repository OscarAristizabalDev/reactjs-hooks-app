import { useRef } from "react"


export const FocusScreen = () => {

    // useRef es un hook propio de react, que en este ejempl permite hacer una refencia a cualquier elemento HTML,
    // Para posteriormente hacer algún cambio sobre este
    const inputReferencia: any = useRef();

    const onSetFocus = () => {
        // En este ejemplo simplemente seleccionamos el input
        inputReferencia.current.select();
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={inputReferencia}
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control"
            />

            <button className="btn btn-primary mt-2" onClick={() => onSetFocus()}>Set focus</button>
        </>
    )
}
