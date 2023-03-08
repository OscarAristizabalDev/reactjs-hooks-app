import { useMemo, useState } from "react";
import { useCounter } from "../hooks"

const iterarExample = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Ahí vamos...')
    }

    return `${iterationNumber} iteraciones realizadas`;
}

export const MemoHook = () => {

    const { counter, incrementar } = useCounter(10);
    const [show, setShow] = useState(true);

    // El hook useMemo sirve para memorizar valores, si el valor del [counter] es diferente, entonces se ejecuta el metodo iterarExample
    // De esta forma controlamos que los metodos solo se llamen si hay cambios, en este caso solo se va a llamar el metoto iterarExample cuando hay un cambio en el counter
    const memorizedValue = useMemo(() => iterarExample(counter), [counter])

    return (
        <>
            <h1>Counter: <small>{counter}</small></h1>
            <hr />

            <h4>{memorizedValue}</h4>

            <button className="btn btn-primary mt-2" onClick={() => incrementar()}>+1</button>
            <button className="btn btn-outline-primary mt-2" onClick={() => setShow(!show)}>{JSON.stringify(show)}</button>
        </>
    )
}
