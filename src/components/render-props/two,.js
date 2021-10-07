import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { inc, dec, rnd } from "./react-redux"

const Two = ({ state, inc, dec, rnd }) => {
    const onClickInc = () => inc()
    const onClickDec = () => dec()
    const onClickRnd = () => rnd()
    return (
        <>
            <button onClick={onClickInc}>INC</button>
            <button onClick={onClickDec}>DEC</button>
            <button onClick={onClickRnd}>RND</button>
            <span>{state}</span>
        </>
    )
}
const mapStateToProps = state => {
    return {
        state
    }
}
const mapDispatchToProps = (dispatch) => {
    const { incDispatch, decDispatch, rndDispatch } = bindActionCreators({
        incDispatch: inc,
        decDispatch: dec,
        rndDispatch: rnd
    }, dispatch)
    return {
        inc: incDispatch,
        dec: decDispatch,
        rnd: rndDispatch
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Two);

