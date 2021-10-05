import './section.scss'
import Services from '../../services/services'
import { createRef, useEffect, useState } from 'react';
import SectionItem from '../section-item/sectionItem';
import ErrorBoundary from '../../error/error-boundary';
import Spinner from '../../spinner/spinner';

const Section = () => {
    const services = new Services();
    const [state, setState] = useState([]);
    const [id, setId] = useState('');
    const [offset, setOffset] = useState(219)
    const [btnLoading, setBtnLoading] = useState(false)
    // const myRef = createRef()
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
    const itemRefs = [];
    const setRef = (ref) => {
        itemRefs.push(ref)
    }
    const myRef = (id) => {
        // console.log(itemRefs);
        itemRefs.forEach(elem => elem.classList.remove('show'));
        itemRefs[id].classList.add('show')
        itemRefs[id].focus()
    }
    const elements = () => {
        if (state.length === 0) {
            return <Spinner />
        } else {
            return state.state.map((elem, i) => {
                return (
                    <div
                        onClick={() => {
                            onClick(elem.id);
                            myRef(i)
                        }}
                        onKeyPress={(e) => {
                            if (e.code === 'KeyI' || e.code === "Enter") {
                                console.log('further');
                                // myRef.current.focus()
                                myRef(i)
                                onClick(elem.id)
                            }
                        }}
                        ref={setRef}
                        key={elem.id}
                        tabIndex={0}
                        className="sect__item">
                        <img src={elem.thumbnail.path + '.' + elem.thumbnail.extension} alt="img"></img>
                        <div>
                            <h2>{elem.name}</h2>
                        </div>
                    </div>
                )
            })
        }
    }
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
            <a href="#footer"><button style={btnLoading ? { color: 'red', backgroundColor: 'black' } : null} onClick={() => onCharactersAll(offset)} className="all">All</button></a>
            <a href="#sectItem" ><button id="onUp" className="all">up</button></a>
        </>
    )
}
export default Section;