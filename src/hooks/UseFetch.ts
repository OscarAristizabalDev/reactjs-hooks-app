import { useEffect, useState } from "react"

export const UseFetch = (url: string) => {

    const [state, setState] = useState<any | null>({
        data: null,
        isLoading: true,
        hasError: null
    })

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true
        })

        const response = await fetch(url);
        const data = await response.json();

        setState({
            data,
            isLoading: false,
            hasError: null
        })
    }

    // Este useEffect se va disparar cada vez que la URL cambie
    useEffect(() => {
        getFetch();
    }, [url])


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}
