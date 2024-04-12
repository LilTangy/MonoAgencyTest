import { useCallback, useState } from "react"

export const useBooleanState = (initialState: boolean) => {
    const [state, setState] = useState(initialState)

    const setTrue = useCallback(() => {
        setState(true)
    }, [])

    const setFalse = useCallback(() => {
        setState(false)
    }, [])

    const toggle = useCallback(() => {
        setState((prevState) => !prevState)
    }, [])

    return [state, toggle, setTrue, setFalse] as const
}
