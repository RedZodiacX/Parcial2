import { useReducer } from "react";
import { Datosreducer } from "./datosreducer";

const initialState = [{

}]

export const datosApp = () => {
    const [datos, dispatchTodo] = useReducer(TodoReducer, initialState)
    return <>
    </>
}