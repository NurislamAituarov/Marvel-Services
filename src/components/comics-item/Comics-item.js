import { Helmet } from 'react-helmet';
import './comics-item.scss';
import { NavLink, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Services from '../../services/services';
import Spinner from '../../spinner/spinner';

const ComicsItem = () => {
  const [comic, setComic] = useState();
  const { comicsId } = useParams();
  const services = new Services();

  useEffect(() => {
    services.getComic(comicsId).then((arr) => setComic(arr.data.results));
  });

  const contentItemComic = () => {
    return comic.map((elem) => {
      let descrip = elem.description;
      let price = elem.prices.price;
      if (!elem.prices.price) {
        price = 'not available';
      }
      if (!elem.description) {
        descrip = 'no description';
      }
      return (
        <div key={elem.id} className="comic-item">
          <img src={elem.thumbnail.path + '.' + elem.thumbnail.extension} alt="x-men" />
          <div>
            <h2>{elem.title}</h2>
            <p>{descrip}</p>
            <p>{elem.pageCount} p.</p>
            <p>{elem.format}</p>
            <div className="price">{price}</div>
          </div>
          <NavLink to="/Comics">Back</NavLink>
        </div>
      );
    });
  };
  return (
    <>
      <Helmet>
        <meta name="description" content="Web site created using create-react-app" />
        <title>{comic ? `${comic[0].title}` : 'comic'}</title>
      </Helmet>
      {comic ? (
        contentItemComic()
      ) : (
        <div style={{ width: '200px', margin: '0 auto', marginTop: '100px' }}>
          <Spinner />
        </div>
      )}
    </>
  );
};
export default ComicsItem;
