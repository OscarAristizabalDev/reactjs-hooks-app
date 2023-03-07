import { useCounter } from "../hooks/UseCounter"

export const CounterWithCustomHool = () => {

    // Se realiza la destructuracion al objeto que retorna el custom hook useCounter
    // Se esta obtieno las funciones que retorna el custom hook
    const { counter, incrementar, disminuir, resetear } = useCounter();

    return (
        <>
            <h1>Counter with Hook {counter}</h1>
            <hr />

            <button className="btn btn-primary" onClick={() => incrementar(2)}>Incrementar</button>
            <button className="btn btn-primary" onClick={resetear}>Reset</button>
            {/* <button className="btn btn-primary" onClick={resetear}>Reset</button>  otra forma de llamar la funcion, es igual */}
            <button className="btn btn-primary" onClick={() => disminuir(2)}>Disminuir</button>
        </>
    )
}
