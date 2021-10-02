import './section.scss'
import Services from '../../services/services'
import { useEffect, useState } from 'react';
import SectionItem from '../section-item/sectionItem';
import ErrorBoundary from '../../error/error-boundary';
import Spinner from '../../spinner/spinner';
//[...state.state, ...elem.data.results]
const Section = () => {
    const services = new Services();
    const [state, setState] = useState([]);
    const [id, setId] = useState('');
    const [offset, setOffset] = useState(219)
    const [btnLoading, setBtnLoading] = useState(false)
    useEffect(() => {
        services.getCharacters().then(elem => {
            setState({
                state: elem.data.results
            })
        })
    }, [])
    const onClick = (id) => {
        setId(id)
    }
    const elements = () => {
        if (state.length === 0) {
            return <Spinner />
        } else {
            return state.state.map(elem => {
                return (
                    <div onClick={() => onClick(elem.id)} key={elem.id} className="sect__item">
                        <img src={elem.thumbnail.path + '.' + elem.thumbnail.extension} alt="img"></img>
                        <div>
                            <h2>{elem.name}</h2>
                        </div>
                    </div>
                )
            })
        }
    }
    window.addEventListener('scroll', function () {
        // if ((window.innerHeight + window.pageYOffset) === document.body.offsetHeight) {
        //    console.log('доскролил');
        // }
    })
    const onCharactersAll = (offset) => {
        setBtnLoading(true)
        setOffset(offset + 9)
        services.getCharacters(offset).then(elem => {
            setBtnLoading(false)
            setState({
                state: [...state.state, ...elem.data.results]
            })
        })
    }
    const onUp = () => {

    }

    return (
        <>
            <div className="wrapper">
                <div className="sect">
                    {elements()}
                </div>
                <div className="sect2">
                    <ErrorBoundary>
                        <SectionItem id={id} />
                    </ErrorBoundary>
                </div>
                <div className="iron">
                    <img src="https://msk.musbot.ru/img/iron-man1.png" alt="iron"></img>
                </div>
            </div>
            <button style={btnLoading ? { color: 'red', backgroundColor: 'black'} : null} onClick={() => onCharactersAll(offset)} className="all">All</button>
            <a href="#sectItem" ><button onClick={onUp} className="all">up</button></a>
        </>
    )
}
export default Section;