import { useCounter,  UseFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHook = () => {

    const { counter, incrementar } = useCounter(1);

    const { data, isLoading, hasError } = UseFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

    const { author, quote } = !!data && data[0]; // Si la data tiene un valor, entonces tome la data en la posicion 0

    console.log(isLoading);

    return (
        <>
            <h1>Breaking bad quotes</h1>
            <hr />

            {
                isLoading
                    ? <LoadingQuote />
                    
                    : <Quote quote={quote} author={author} />
            }

            <button className="btn btn-primary" disabled={isLoading} onClick={() => incrementar(1)}>
                Next quote
            </button>

        </>
    )
}
