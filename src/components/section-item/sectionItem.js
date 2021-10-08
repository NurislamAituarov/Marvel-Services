import Services from "../../services/services";
import './sectionItem.scss'
import { useEffect, useState } from "react";
import Spinner from '../../spinner/spinner'

const SectionItem = ({ id }) => {
    const [state, setState] = useState({
        arr: [],
        url: 'http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04.jpg',
        name: 'NameCharacter',
        description: null
    })
    const [loading, setLoading] = useState(false)
    const services = new Services();
    useEffect(() => {
        if (id) {
            setLoading(true)
            services.getCharacter(id).then(res => {
                setState({
                    arr: res.data.results[0].comics.items,
                    url: res.data.results[0].thumbnail.path + '.' + res.data.results[0].thumbnail.extension,
                    name: res.data.results[0].name,
                    description: res.data.results[0].description
                })
                setLoading(false)
            })
        }
    }, [id])
    const content = loading ? <Spinner /> : <View state={state} />;

    return (
        <>
            <div id="sectItem" className="section__item">
                {content}
            </div>
            <span>{state.description}</span>
            <div className="comics__item">
                <h3>Comics :</h3>
                <ul>
                    {
                        state.arr.length > 0 ? null : "Three is no comics with this character"
                    }
                    {
                        state.arr.map((elem, i) => {
                            if (i > 9) { return null }
                            return (
                                <li key={i}>{elem.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}
export default SectionItem;

const View = ({ state }) => {

    return (
        <>
            <img src={state.url} alt="img"></img>
            <div>
                <h4>{state.name}</h4>
                <button>HOMEPAGE</button>
                <button>WIKI</button>
            </div>
        </>
    )
}