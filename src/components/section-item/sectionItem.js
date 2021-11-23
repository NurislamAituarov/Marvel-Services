import Services from '../../services/services';
import './sectionItem.scss';
import { useEffect, useState } from 'react';
import Spinner from '../../spinner/spinner';
import ContentLoader from 'react-content-loader';

const SectionItem = ({ id }) => {
  const [state, setState] = useState(false);
  const [loading, setLoading] = useState(false);
  const services = new Services();

  useEffect(() => {
    if (id) {
      setLoading(true);
      services.getCharacter(id).then((res) => {
        setState({
          arr: res.data.results[0].comics.items,
          url: res.data.results[0].thumbnail.path + '.' + res.data.results[0].thumbnail.extension,
          name: res.data.results[0].name,
          description: res.data.results[0].description,
        });
        setLoading(false);
      });
    }
  }, [id]);
  const content = loading ? (
    <Spinner />
  ) : state ? (
    <View state={state} />
  ) : (
    <ContentLoader
      width={450}
      height={200}
      viewBox="0 0 700 300"
      backgroundColor="#f5f5f5"
      foregroundColor="#dbdbdb">
      <rect x="4" y="8" rx="3" ry="3" width="7" height="288" />
      <rect x="6" y="289" rx="3" ry="3" width="669" height="8" />
      <rect x="670" y="9" rx="3" ry="3" width="6" height="285" />
      <rect x="55" y="42" rx="16" ry="16" width="274" height="216" />
      <rect x="412" y="113" rx="3" ry="3" width="102" height="7" />
      <rect x="402" y="91" rx="3" ry="3" width="178" height="6" />
      <rect x="405" y="139" rx="3" ry="3" width="178" height="6" />
      <rect x="416" y="162" rx="3" ry="3" width="102" height="7" />
      <rect x="405" y="189" rx="3" ry="3" width="178" height="6" />
      <rect x="5" y="8" rx="3" ry="3" width="669" height="7" />
      <rect x="406" y="223" rx="14" ry="14" width="72" height="32" />
      <rect x="505" y="224" rx="14" ry="14" width="72" height="32" />
      <rect x="376" y="41" rx="3" ry="3" width="231" height="29" />
    </ContentLoader>
  );

  return (
    <>
      <div id="sectItem" className="section__item">
        {content}
      </div>
      <span>{state.description}</span>
      <div className="comics__item">
        <h3>Comics :</h3>
        {state && (
          <ul>
            {state.arr.length > 0 ? null : 'Three is no comics with this character'}
            {state.arr.map((elem, i) => {
              if (i > 9) {
                return null;
              }
              return <li key={i}>{elem.name}</li>;
            })}
          </ul>
        )}
      </div>
    </>
  );
};
export default SectionItem;

const View = ({ state }) => {
  return (
    <>
      <img id="img" src={state.url} alt="img"></img>
      <div className="sect_item_text">
        <h4>{state.name}</h4>
        <button>HOMEPAGE</button>
        <button>WIKI</button>
      </div>
    </>
  );
};
