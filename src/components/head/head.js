import './head.scss'
import { useState, useEffect } from 'react'
import Services from '../../services/services';
import Spinner from '../../spinner/spinner'
import { Transition } from 'react-transition-group'

const Head = () => {
    const [state, setState] = useState(
        { name: null, description: null, thumbnail: null, homepage: null, wiki: null }
    )
    const [loaded, setLoaded] = useState(true)
    const [show, setShow] = useState(true)
    const services = new Services();
    useEffect(() => {
        updateChar();
    }, [])
    const updateChar = () => {
        setLoaded(true)
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)
        services.getCharacter(id).then(res => {
            setLoaded(false)
            setShow(true)
            setState({
                name: res.data.results[0].name,
                description: res.data.results[0].description,
                thumbnail: res.data.results[0].thumbnail.path + '.' + res.data.results[0].thumbnail.extension,
                homepage: res.data.results[0].urls[0].url,
                wiki: res.data.results[0].urls[1].url
            })
        })
    }
    const onRandomCharacter = () => {
        updateChar();
        setShow(false)
    }

    return (
        <div className="head">
            <div className="item">
                {loaded ? <Spinner /> : <View state={state} show={show} />}
            </div>
            <div className="item item__2">
                <h3>base url: https://gateway.marvel.com , api version: Cable</h3>
                <span>Or choose another one</span><br></br>
                <button onClick={onRandomCharacter}>left</button>
            </div>
        </div>
    )
}
export default Head;

const View = ({ state, show }) => {

    const duration = 300;
    const defaultStyle = {
        transition: `all ${duration}ms ease-in-out`,
        opacity: 0,
        visibility: 'hidden'
    }
    const transitionStyles = {
        entering: { opacity: 1,visibility: 'visible' },
        entered: { opacity: 1,visibility: 'visible' },
        exiting: { opacity: 0,visibility: 'hidden'},
        exited: { opacity: 0,visibility: 'hidden'},
    };

    const str = state.description ? state.description.split(' ') : ['not', 'description']
    const description = str.length > 10 ? str.splice(0, 10).join(' ') : str.join(' ')
    return (
        <Transition in={show} timeout={duration} unmountOnExit>
            {(data) => {
                return (
                    <div className="item" style={{
                        ...defaultStyle,
                        ...transitionStyles[data],
                    }}>
                        <img src={state.thumbnail} alt="img"></img>
                        <div className="nameCharacter">
                            <h3>{state.name}</h3>
                            <span>{description} <strong>...</strong></span>
                            <div>
                                <a href={state.homepage} target="_blank"><button>homepage</button></a>
                                <a href={state.wiki} target="_blank"><button>wiki</button></a>
                            </div>
                        </div>
                    </div>
                )
            }}
        </Transition>
    )
}