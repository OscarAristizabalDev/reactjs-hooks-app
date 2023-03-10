import { useState } from "react"

export const useCounter =  (initialValue = 10) => {
    
    const [counter, setCounter] = useState(initialValue);
    
    const incrementar = (value = 1) => {
        setCounter(counter + value);
    };

    const disminuir = (value = 1) => {
        if(counter === 0) return;
        setCounter(counter - value)
    };

    const resetear = () => {
        setCounter(initialValue);
    }

    // Un objeto puede retornar funciones
    return {
        counter,
        incrementar,
        disminuir,
        resetear
    }
}