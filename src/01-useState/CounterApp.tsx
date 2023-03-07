import { useState } from "react"

export const CounterApp = () => {

    
    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    });

    // Se realiza una destructuracion al objeto, tomando los valores counter1, counter2, counter3
    const {counter1, counter2, counter3} = state;

    const sumCounters = (value: number) => {
        setCounter(
            {
                ...state, // ...state indica que se van a tomar las propiedades del objetos
                counter1: counter1 + value, // solo se actualiza la propiedad counter1
            }
        );
        
    }

    return (
        <>
            <h1>Counter 1: {counter1}</h1>
            <h1>Counter 2: {counter2}</h1>
            <h1>Counter 3: {counter3}</h1>

            <hr />

            <button className="btn" onClick={() => sumCounters(1)}>+1</button>
        </>
    )
}
