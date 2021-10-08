import { NavLink } from "react-router-dom";

const Http400 = () => {

    return (
        <div style={{margin: '0 auto',width:'400px', height:"200px", position: 'relative'}}>
            <h5 style={{position:'absolute', top: '50px', left: '20px', color: 'white'}}>Вы попали на не сущуствующи адрес</h5>
            <img style={{width: '100%'}} src="https://avatars.mds.yandex.net/i?id=2a00000179e32e5fe264721e4167774d97cc-4250094-images-thumbs&n=13" alt="img"></img>
            <NavLink exact to="/">вернуться назад на главную страницу</NavLink>
        </div>
    )
}
export default Http400;