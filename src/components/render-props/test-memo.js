import { useState, memo, useCallback, useMemo } from "react"

// function propsCompare(prevProps, nextProps) {
//     return prevProps.mail.name === nextProps.mail.name && prevProps.text === nextProps.text;
// }

const Form = memo((props) => {
    console.log('render');
    console.log(props.num);
    return (
        <div>
            <input type="text" value={props.text} />
            <input type="text" value={props.mail} />
        </div>
    )
})

const AppForm = () => {
    const [state, setState] = useState({
        mail: "nurislam-1994@mail.ru",
        text: "some text",
    });
    const [num, setNum] = useState(0)
    const onForm = () => {
        setState({
            mail: "nurislam1994@mail.ru",
            text: "some text",
        })
        setNum(num => num + 1)
    }
    const myFunc = useCallback(() => {
        console.log('func');
    }, [])
    const count = useMemo(() => {
        return num
    }, [])
    return (
        <div>
            <Form mail={state.mail} text={state.text} func={myFunc} num={count} />
            <button onClick={() => {
                onForm();
            }}>click</button>
        </div>
    )
}
export default AppForm;