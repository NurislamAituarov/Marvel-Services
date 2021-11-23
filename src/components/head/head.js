import './head.scss';
import { useState, useEffect, memo } from 'react';
import Services from '../../services/services';
import Spinner from '../../spinner/spinner';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ContentLoader from 'react-content-loader';

const Head = () => {
  const [state, setState] = useState({
    name: null,
    description: null,
    thumbnail: null,
    homepage: null,
    wiki: null,
  });
  const [loaded, setLoaded] = useState(true);
  const [trigger, setTrigger] = useState(false);
  const services = new Services();

  useEffect(() => {
    updateChar();
    const timerTrigger = setInterval(() => {
      setTrigger((trigger) => setTrigger(!trigger));
    }, 2000);

    return () => {
      clearInterval(timerTrigger);
    };
  }, []);

  const updateChar = () => {
    setLoaded(true);
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    services.getCharacter(id).then((res) => {
      setLoaded(false);

      setState({
        name: res.data.results[0].name,
        description: res.data.results[0].description,
        thumbnail:
          res.data.results[0].thumbnail.path + '.' + res.data.results[0].thumbnail.extension,
        homepage: res.data.results[0].urls[0].url,
        wiki: res.data.results[0].urls[1].url,
      });
    });
  };
  const onRandomCharacter = () => {
    updateChar();
  };

  // console.log(trigger);
  return (
    <div className="head">
      <TransitionGroup className="item">
        {loaded ? <Spinner /> : <View state={state} />}
      </TransitionGroup>
      <div className="item item__2">
        <h3>
          The Marvel Comics API allows developers everywhere to access information about Marvel's
          vast library of comics—from what's coming up, to 70 years ago.
        </h3>
        <span>Or choose another one</span>
        <br></br>
        <button
          style={trigger ? { backgroundColor: 'white', color: 'black' } : null}
          onClick={onRandomCharacter}>
          random Character
        </button>
      </div>
    </div>
  );
};
export default Head;

const View = memo(({ state }) => {
  // console.log(state);
  const str = state.description ? state.description.split(' ') : ['not', 'description'];
  const description = str.length > 10 ? str.splice(0, 10).join(' ') : str.join(' ');
  return (
    <CSSTransition timeout={1000} classNames="my-node">
      <>
        {state.thumbnail ? (
          <LazyLoadImage effect="blur" src={state.thumbnail} alt="img" width="200" height="150" />
        ) : (
          <div>
            <ContentLoader
              speed={1}
              width={200}
              height={150}
              viewBox="0 0 200 150"
              backgroundColor="#f3f3f3"
              foregroundColor="#ebebeb">
              <rect x="11" y="346" rx="5" ry="5" width="88" height="35" />
              <rect x="34" y="204" rx="5" ry="5" width="180" height="30" />
              <rect x="183" y="261" rx="5" ry="5" width="27" height="35" />
              <rect x="97" y="95" rx="0" ry="0" width="0" height="1" />
              <rect x="96" y="96" rx="0" ry="0" width="1" height="0" />
              <rect x="35" y="261" rx="5" ry="5" width="98" height="37" />
              <rect x="100" y="283" rx="0" ry="0" width="10" height="2" />
              <rect x="89" y="281" rx="0" ry="0" width="21" height="1" />
              <rect x="29" y="15" rx="0" ry="0" width="140" height="123" />
            </ContentLoader>
          </div>
        )}
        <div className="nameCharacter">
          <h3>{state.name}</h3>
          <span>
            {description} <strong>...</strong>
          </span>
          <div>
            <a href={state.homepage} target="_blank">
              <button>homepage</button>
            </a>
            <a href={state.wiki} target="_blank">
              <button>wiki</button>
            </a>
          </div>
        </div>
      </>
    </CSSTransition>
  );
});
