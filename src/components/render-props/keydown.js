import { createRef, useEffect, useState } from "react";
import s from './keydown.module.scss'

const Keydown = () => {
    const [colorBtn, setColorBtn] = useState(false);
    const [value, setValue] = useState('')

    const myRef = createRef();
    const mySpan = createRef();
    useEffect(() => {
        mySpan.current.focus();
        const tim = setInterval(()=>{
            console.log('interval');
        },3000)
        return ()=>{
            clearInterval(tim)
        }
    }, [])
    const focusMy = (e) => {
        e.preventDefault()
        myRef.current.focus()
    }
    const color = (e) => {
        e.preventDefault()
        setColorBtn(!colorBtn)
    }
    const onValue = (e) => {
        if(e.target.value.match(/\D/g)){
            setColorBtn(true)
        }else{
            setColorBtn(false)
            setValue(e.target.value)
        }
    }
    const btnColor = colorBtn ? "btnColor" :null;
    return (
        <>
            <form className={s.form_wrapper}>
                <div tabIndex={0} ref={myRef} className={s.block__test}>wrapper</div>
                <input type="text" placeholder="Keydown" ref={mySpan}></input>
                <input placeholder="color" type="text"></input>
                <input className={s[btnColor]} onChange={onValue} placeholder="number" type="text" value={value}></input>
                <button onClick={focusMy}>myRef</button>
            </form>
            <button onClick={color} onKeyPress={(e) => {
                if (e.code === "Enter") { console.log(e.target) }
            }}>keydown</button>
        </>
    )
}
export default Keydown;