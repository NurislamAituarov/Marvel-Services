import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Services from '../../services/services'
import Spinner from '../../spinner/spinner'
import './form-item.scss'

const FormItem = () => {
    const services = new Services();
    const [char, setChar] = useState({
        url: null,
        name: null,
        description: null
    });
    const { charId } = useParams();
    useEffect(() => {
        services.getCharacter(charId).then(arr => setChar({
            url: arr.data.results[0].thumbnail.path + '.' + arr.data.results[0].thumbnail.extension,
            name: arr.data.results[0].name,
            description: arr.data.results[0].description
        }))
    }, [])

    const content = () => {
        return (
            <>
                <img src={char.url} alt="char"></img>
                <div>
                    <h2>{char.name}</h2>
                    <p>{char.description}</p>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="header">
                <img src="https://www.nastol.com.ua/pic/201903/2560x1440/nastol.com.ua-328432.jpg" alt="header"/>
                <span>Character {char.name}</span>
                <img src="https://i.pinimg.com/originals/b8/0a/89/b80a898e359902f2accf7f3a72293080.jpg" alt="img"/>
            </div>
            <div className="wrapper__char">
                {char.name ? content() : <Spinner/>}
            </div>
        </>
    )
}
export default FormItem;