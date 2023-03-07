import { useEffect } from "react"
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    // Se destructura las propiedades del custom hook useForm
    const { formState, onCambiarInput, username, password, email }: any = useForm({
        username: '',
        email: '',
        password: ''
    });

    return (
        <>
            <h1>Formulario con Custom Hook</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="UserName"
                name="username"
                value={username}
                onChange={(event) => onCambiarInput(event)}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="oscar@google.com"
                name="email"
                value={email}
                onChange={(event) => onCambiarInput(event)}
            />

            <input
                type="password"
                className="form-control mt-2"
                placeholder=""
                name="password"
                value={password}
                onChange={(event) => onCambiarInput(event)}
            />


        </>
    )
}
