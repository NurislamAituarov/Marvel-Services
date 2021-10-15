import { Helmet } from 'react-helmet'
import { useState } from 'react'
import Keydown from './keydown'
import ReactRedux from './react-redux'
import AppForm from './test-memo'

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
            <Helmet>
                <meta
                    name="description"
                    content="Web site created using create-react-app"
                />
                <title>Render props</title>
            </Helmet>
            <button onClick={onCount}>count</button>
            {
                render(state)
            }
            <AppForm />
            {/* <ReactRedux/>
            <Keydown/> */}
        </>
    )
}
export default RenderProps;