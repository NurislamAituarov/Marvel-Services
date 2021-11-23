import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Services from '../../services/services';
import Spinner from '../../spinner/spinner';
import './form-item.scss';
import venom from '../../image/venom.jpg';
import iron from '../../image/iron.jpg';
import { NavLink } from 'react-router-dom';

const FormItem = () => {
  const services = new Services();
  const [char, setChar] = useState({
    url: null,
    name: null,
    description: null,
  });
  const { charId } = useParams();
  useEffect(() => {
    services.getCharacter(charId).then((arr) =>
      setChar({
        url: arr.data.results[0].thumbnail.path + '.' + arr.data.results[0].thumbnail.extension,
        name: arr.data.results[0].name,
        description: arr.data.results[0].description,
      }),
    );
  }, []);

  const content = () => {
    return (
      <>
        <img src={char.url} alt="char"></img>
        <div>
          <h2>{char.name}</h2>
          <span>Description</span>
          <p>{char.description}</p>
          <NavLink to="/">
            <button>back</button>
          </NavLink>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="header">
        <img src={venom} alt="header" />
        <div
          style={{
            width: '270px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <span>Character:</span>
          <p>{char.name}</p>
        </div>
        <img src={iron} alt="img" />
      </div>
      <div className="wrapper__char">{char.name ? content() : <Spinner />}</div>
    </>
  );
};
export default FormItem;
