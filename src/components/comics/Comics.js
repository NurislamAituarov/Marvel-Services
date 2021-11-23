import { Helmet } from 'react-helmet';
import './comics.scss';
import Services from '../../services/services';
import { useState, useEffect, useRef } from 'react';
import Spinner from '../../spinner/spinner';
import { NavLink } from 'react-router-dom';
import venom from '../../image/venom.jpg';
import iron from '../../image/iron.jpg';

const Comics = () => {
  const [arr, setArr] = useState();
  const services = new Services();
  const [offset, setOffset] = useState(108);
  const itemRefs = useRef([]);
  const [btnActive, setBtn] = useState(false);

  useEffect(() => {
    services.getComics().then((comics) => {
      setArr(comics.data.results);
    });
  }, []);

  const onFocus = (id) => {
    // console.log(itemRefs.current[id]);
    itemRefs.current.forEach((elem) => elem.classList.remove('showComics'));
    itemRefs.current[id].classList.add('showComics');
    itemRefs.current[id].focus();
  };
  const onClickItemComics = (id) => {
    onFocus(id);
  };

  const comicsItem = () => {
    return arr.map((item, i) => {
      return (
        <li
          onClick={() => onClickItemComics(i)}
          className="comicsItem"
          onKeyPress={(e) => {
            if (e.code === 'KeyP' || e.code === 'Enter') {
              onFocus(i);
              onClickItemComics(i);
            }
          }}
          ref={(el) => (itemRefs.current[i] = el)}
          tabIndex={0}
          key={i}>
          <NavLink to={`/Comics/${item.id}`}>
            <img src={item.thumbnail.path + '.' + item.thumbnail.extension} alt="img"></img>
            <span>{item.title}</span>
          </NavLink>
        </li>
      );
    });
  };

  const newComics = () => {
    setBtn(true);
    setOffset((offset) => offset + 8);
    services.getComics(offset).then((comics) => {
      setBtn(false);
      setArr((arr) => [...arr, ...comics.data.results]);
    });
  };

  return (
    <>
      <Helmet>
        <meta name="description" content="Page with list of our comics" />
        <title>Comics page</title>
      </Helmet>
      <div className="wrapperComics">
        <div className="header">
          <img src={venom} alt="header" />
          <div
            style={{
              width: '270px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <span>Comics</span>
          </div>
          <img src={iron} alt="img" />
        </div>
        {arr ? (
          <ul className="block__2">{comicsItem()}</ul>
        ) : (
          <div
            style={{ width: '200px', margin: '0 auto', marginTop: '100px', marginBottom: '100px' }}>
            <Spinner />
          </div>
        )}
        <button onClick={newComics} className={btnActive ? 'btn btn__active' : 'btn'}>
          LOAD MORE
        </button>
      </div>
    </>
  );
};
export default Comics;
