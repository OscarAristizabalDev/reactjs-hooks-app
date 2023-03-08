
export const ShowIncrement = ({ incrementar }: any) => {

    console.log('Me volvi a generar');

    return (
        <button className="btn btn-primary" onClick={() => incrementar(5)}>Incrementar</button>
    )
}
