import { useState } from 'react'
import Keydown from './keydown'
import ReactRedux from './react-redux'

export const Count = ({ state }) => {
    return <span>{state}</span>
}
const RenderProps = ({ render }) => {
    const [state, setState] = useState(0)
    const onCount = () => {
        setState(state + 1)
    }
    return (
        <>
            <button onClick={onCount}>count</button>
            {
                render(state)
            }
            <ReactRedux/>
            <Keydown/>
        </>
    )
}
export default RenderProps;