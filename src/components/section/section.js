import './section.scss';
import Services from '../../services/services';
import { useEffect, useState, useRef } from 'react';
import SectionItem from '../section-item/sectionItem';
import ErrorBoundary from '../../error/error-boundary';
import Spinner from '../../spinner/spinner';
import SearchFormik from '../search-character/SearchFormik';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Section = () => {
  const services = new Services();
  const [state, setState] = useState([]);
  const [id, setId] = useState('');
  const [offset, setOffset] = useState(219);
  const [btnLoading, setBtnLoading] = useState(false);
  useEffect(() => {
    services.getCharacters().then((elem) => {
      setState((state) => [...state, ...elem.data.results]);
    });
  }, []);

  const onClick = (id) => {
    setId(id);
  };
  const itemRefs = useRef([]);
  const focusOnItem = (id) => {
    itemRefs.current.forEach((elem) => elem.classList.remove('show'));
    itemRefs.current[id].classList.add('show');
    itemRefs.current[id].focus();
  };
  const elements = () => {
    const anchors = document.querySelectorAll('a[href*="#"]');
    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute('href').substr(1);
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });
    }
    return state.map((elem, i) => {
      // console.log(elem);
      return (
        <div
          onKeyPress={(e) => {
            if (e.code === 'KeyI' || e.code === 'Enter') {
              focusOnItem(i);
              onClick(elem.id);
            }
          }}
          ref={(el) => (itemRefs.current[i] = el)}
          tabIndex={0}
          key={elem.id}
          onClick={() => {
            onClick(elem.id);
            focusOnItem(i);
          }}
          className="sect__item">
          <LazyLoadImage
            className="sect_img"
            effect="blur"
            src={elem.thumbnail.path + '.' + elem.thumbnail.extension}
            alt="img"
          />
          <div>
            <h2>{elem.name}</h2>
          </div>
        </div>
      );
    });
  };
  const onCharactersAll = (offset) => {
    setBtnLoading(true);
    setOffset((offset) => offset + 9);
    services.getCharacters(offset).then((elem) => {
      setBtnLoading(false);
      setState((state) => [...state, ...elem.data.results]);
    });
  };

  return (
    <>
      <div className="wrapper">
        {state.length === 0 ? <Spinner /> : <div className="sect">{elements()}</div>}
        <div className="sect2">
          <ErrorBoundary>
            <SectionItem id={id} />
          </ErrorBoundary>
          <SearchFormik />
        </div>
        <div className="iron">
          <img src="https://msk.musbot.ru/img/iron-man1.png" alt="iron"></img>
        </div>
      </div>
      <div className="section_bottom">
        <a href="#footer">
          <button
            style={btnLoading ? { color: 'red', backgroundColor: 'black' } : null}
            onClick={() => onCharactersAll(offset)}
            className="all">
            THE FOLLOWING
          </button>
        </a>
        <a href="#up">
          <button id="onUp" className="all">
            UP
          </button>
        </a>
      </div>
    </>
  );
};
export default Section;
