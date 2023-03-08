import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementarFather = useCallback(
        (value: any) => {
            setCounter((contador) => contador + value);
        },
        [],
    )

    // const incrementarFather = () => {
    //     setCounter(counter + 1);
    // }

    return (
        <>
            <h1>useCallback Hook: {counter}</h1>
            <hr />

            <ShowIncrement incrementar={incrementarFather} />
        </>
    )
}
