import { Hijo } from './Hijo'
import { useCallback, useState } from 'react';

export const Padre = () => {

    const numeros = [2, 4, 6, 8, 10];
    const [valor, setValor] = useState(0);

    // mediante el useCallback se puede memorizar una funcion, es decir, va a tener un solo espacio en memoria
    // Al tener la funciona memorizada, cada vez que se haga el llamada de esta
    // el componente hijo no se va a volver a renderizar, solo se renderiza el componente la primer vez que se cargue
    const incrementar = useCallback(
        // Este valor de incremente es el que se esta enviado desde el hijo en el evento onClick
        (valorIncremento: any) => {
            setValor((oldValue) => oldValue + valorIncremento)
        },
        [],
    )



    return (
        <div>
            <h1>Padre</h1>
            <p> Total: {valor} </p>

            <hr />

            {
                numeros.map(n => (
                    <Hijo
                        key={n}
                        numero={n}
                        incrementar={incrementar}
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
