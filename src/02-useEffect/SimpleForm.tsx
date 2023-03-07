import { useEffect, useState } from "react"

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: 'Oscar',
        email: 'lsas@gmail.com'
    });

    const { username, email } = formState;

    // Del objeto event destructuramos el target
    const onCambiarInput = ({ target }: any) => {
        // destructuracion del target
        const { name, value } = target;
        console.log(name, value);
        setformState({
            ...formState,
            [name]: value // aca atributo del objeto formState le asigna el valor
        })
    };

    // este useEffect se dispara una sola vez y solo permite que el componenete se carge una sola vez
    // [] significa que se ejecute una sola vez
    useEffect(() => {
        console.log('useEffect called!')
    }, []);

    // este useEffect se dispara cada vez que cambien los campos del formulario
    useEffect(() => {
        console.log('formState chaged!')
    }, [formState]);
    
    // este useEffect se dispara cada vez que se modifique el email del formulario
    useEffect(() => {
        console.log('formState chaged!')
    }, [email]);


    return (
        <>
            <h1>Formulario Simple</h1>
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
        </>
    )
}
