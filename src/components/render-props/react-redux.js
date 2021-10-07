import { createStore } from "redux";
import One from "./one";
import {Provider} from 'react-redux'

const reducer = (state = 0, action) => {
    switch (action.type) {
        case "INC":
            return state + 1;
        case "DEC":
            return state - 1;
        case "RND":
            return state + action.payload
        default:
            return state;
    }
}
const store = createStore(reducer)
export const inc = () => ({ type: "INC" })
export const dec = () => ({ type: "DEC" })
export const rnd = () => ({type: "RND", payload: Math.floor(Math.random()*10)})

const ReactRedux = () => {
    return (
        <Provider store={store}>
            <One />
        </Provider> 
    )
}
export default ReactRedux;