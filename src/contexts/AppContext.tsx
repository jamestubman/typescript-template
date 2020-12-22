import react, { createContext, useEffect, useReducer } from "react"

const Context: any = createContext(null)
const ACTIONS: any = { ON_LOAD: "ON_LOAD" }
Context.displayName = "AppContext"
Context.Provider = (Provider => (props: { children: any; value: any }) => {
    const { children, value } = props || {}
    const [state, dispatch] = useReducer(
        (state: any, action: any) => {
            switch (action.type) {
                case ACTIONS.ON_LOAD:
                    return { ...state, loaded: true }
                default:
                    return state
            }
        },
        {
            loaded: false,
            ...value,
        }
    )

    useEffect(() => {
        if (!state.loaded) {
            dispatch({
                type: ACTIONS.ON_LOAD,
            })
        }
    }, [state.loaded])

    return <Provider value={{ ...state, dispatch }}>{children}</Provider>
})(Context.Provider)
export default Context
