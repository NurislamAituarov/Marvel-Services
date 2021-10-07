import SecondTest from "./SecondTest";
import Two from "./two,";
import { useEffect } from 'react'
const One = () => {

    const arr = [1, 2, 3, 4, 5]//5,4,3,2,1
    function array(str) {
        const newArr = []
        const res = [...str, ...str.reverse()].reduce((acu, prev) => {
            if (acu !== prev) {
                newArr.push(prev)
                return prev
            } else {
                return prev
            }
        },0)

        return newArr
    }
    console.log(array(arr));



    return (
        <Two/>
        // <SecondTest />
    )
}
export default One;