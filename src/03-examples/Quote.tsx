import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({ quote, author }: QuoteProps) => {

    const parrafoReferencia: any = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

    // useLayoutEffect en un Hook similar al useEffect, con la diferencia que se ejecuta una vez este cargado en su totalidad el elemento o componente
    // En este caso se hizo el ejemplo para que useLayoutEffect se ejecute unicamente cuando el parrafo (parrafoReferencia) se haya cargado en su totalidad
    // y poder obtener las medidas (width, height)
    useLayoutEffect(() => {
        // Permite obtener las medidas del parrafo
        const { width, height} = parrafoReferencia.current.getBoundingClientRect();
        setBoxSize({
            width,
            height
        });

    }, [quote])

    return (
        <>
            <blockquote className="blockquote text-end" style={{ display: 'flex' }}>
                <p className="mb-1" ref={parrafoReferencia}>{quote}</p>
                <footer className="blockquote-footer mt-2">{author}</footer>
            </blockquote>

            <code>{JSON.stringify(boxSize)}</code>
        </>

    )
}


type QuoteProps = {
    quote: string,
    author: string
}