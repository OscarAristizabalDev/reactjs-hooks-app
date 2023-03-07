import { useEffect, useState } from "react"

export const Message = () => {

    const [coords, setCoords] = useState({
        x: 0,
        y: 0
    });


    // En este ejemplo de useEffect se aplica la funcion return
    // Se remueve el eventlister cuando el componente deja de existir
    // El componente deja de existir cuando el username es diferente a oscar
    useEffect(() => {

        const onMouseEvent = ({ x, y }: any) => {
            const coords = { x, y };
            setCoords({ x, y })
        };

        window.addEventListener('mousemove', onMouseEvent);

        return () => {
            window.removeEventListener('mousemove', onMouseEvent);
        }
    }, []) // Solo permite que se ejecute cuando el componente se carga por primer vez


    return (
        <>
            <h3>Usuario ya existe</h3>
            {JSON.stringify(coords)}
        </>
    )
}
