import { useState } from "react";
import { bindActionCreators, createStore } from "redux";


const ReactRedux = () => {
    const reducer = (state = 0, action) => {
        switch (action.type) {
            case "INC":
                return state + 1;
            case "DEC":
                return state - 1;
            default:
                return state;
        }
    }
    const [counter, setCounter] = useState(0)
    const store = createStore(reducer)
    const inc = () => ({ type: "INC" })
    const dec = () => ({ type: "DEC" })
    const {incDispatch, decDispatch} = bindActionCreators({
        incDispatch: inc,
        decDispatch: dec
    },store.dispatch)

    const onClickInc = () => {
        incDispatch()
        // store.dispatch(inc())
    }
    const onClickDec = () => {
        decDispatch()
        // store.dispatch(dec())
    }
    const update = () => {
        // console.log(store.getState());
        setCounter(counter + store.getState())
    }
    store.subscribe(update)
    return (
        <>
            <button onClick={onClickInc}>INC</button>
            <button onClick={onClickDec}>DEC</button>
            <span>{counter}</span>
        </>
    )
}
export default ReactRedux;