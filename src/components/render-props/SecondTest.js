import { useEffect } from 'react'
import { useState } from 'react'
import s from './SecondTest.module.scss'

export default function SecondTest() {

    const [state, setState] = useState();
    const [color, setColor] = useState(false)
    const [counter, setCounter] = useState(1)
    const [num, setNum] = useState(0)
    useEffect(() => {
        (function () {
            fetch('https://www.cbr-xml-daily.ru/latest.js')
                .then((data) => data.json())
                .then((str) => {
                    setState(str)
                })
        })()
    }, [])

    function counterUSD() {
        setCounter((1 * state.rates.USD).toFixed(3) + ' USD')
    }
    function counterTG() {
        setCounter((1 * state.rates.KZT).toFixed(3) + ' KZT')
    }
    const onClick = () => {
        setNum((num) => num + 1)
        setNum((num) => num + 1)
    }
    console.log(num);
    return (
        <div className={s.wrapper}>
            <div style={color ? { backgroundColor: 'black', color: 'white' } : null}>{counter}</div>
            <button onClick={counterUSD}>USD</button>
            <button onClick={counterTG}>KZT</button>
            <button onClick={() => setCounter(1 + " RUB")}>RUB</button>
            <button onClick={onClick}>num</button>
        </div>
    )
}