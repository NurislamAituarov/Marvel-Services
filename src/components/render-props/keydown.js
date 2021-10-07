import { useEffect, useState, useRef } from "react";
import s from './keydown.module.scss'

function useInputValidate(initialValue) {
    const [value, setValue] = useState(initialValue);

    const onChange = event => {
        setValue(event.target.value)
    }
    const validateInput = () => value.search(/\D/g) >= 0

    return { value, onChange, validateInput }
}

const Keydown = () => {

    const value = useInputValidate('')
    const valueSecond = useInputValidate('')
    const valueThree = useInputValidate('')

    const myRef = useRef();
    const mySpan = useRef();
    const count = useRef(1)
    useEffect(() => {
        mySpan.current.focus();
    }, [])
    // useEffect(() => {
    //     console.log('effect');
    //     console.log(count);////{current: 6}
    // })
    const focusMy = (e) => {
        e.preventDefault()
        myRef.current.focus()
    }
    const btnColor = value.validateInput() ? 'btnColor' : null;
    const btnColorSecond = valueSecond.validateInput() ? 'btnColor' : null;
    const btnColorThree = valueThree.validateInput() ? 'btnColor' : null;
    return (
        <>
            <form className={s.form_wrapper}>
                <div tabIndex={0} ref={myRef} className={s.block__test}>wrapper</div>
                <input onChange={valueSecond.onChange} className={s[btnColorSecond]} value={valueSecond.value} type="text" placeholder="Keydown" ref={mySpan}></input>
                <input onChange={valueThree.onChange} className={s[btnColorThree]} value={valueThree.value} placeholder="color" type="text"></input>
                <input onChange={value.onChange} className={s[btnColor]} placeholder="number" type="text" value={value.value}></input>
                <button onClick={focusMy}>myRef</button>
            </form>
            <button onKeyPress={(e) => {
                if (e.code === "Enter") { console.log(e.target) }
            }}>ColorBorder</button>
            <button onClick={() => count.current++}>{count.current}</button>
        </>
    )
}
export default Keydown;