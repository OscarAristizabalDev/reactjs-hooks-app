import { memo } from 'react';

// El metodo memo evita que el componente no se vuelva a renderizar, es decir, solo se renderiza si hubieron cambios en las propiedades
// Esto es util cuando los componente son grandes, aca es solo por ejemplo
export const Small = memo(({ value }: SmallProps) => {

    console.log('Me volvi a dibujar :(')

    return (
        <small>{value}</small>
    )
})


type SmallProps = {
    value: any
}