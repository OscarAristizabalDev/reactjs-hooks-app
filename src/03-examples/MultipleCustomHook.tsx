import { UseFetch } from "../hooks/UseFetch"

export const MultipleCustomHook = () => {

    const { data, isLoading, hasError } = UseFetch('https://api.breakingbadquotes.xyz/v1/quotes');

    const { author, quote } = !!data && data[0]; // Si la data tiene un valor, entonces tome la data en la posicion 0

    return (
        <>
            <h1>Breaking bad quotes</h1>
            <hr />

            {
                isLoading
                    ? (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                    : (
                        <blockquote className="blockquote text-end">
                            <p className="mb-1">{quote}</p>
                            <footer className="blockquote-footer mt-2">{author}</footer>
                        </blockquote>
                    )
            }

            <button className="btn btn-primary">
                Next quote
            </button>

        </>
    )
}
