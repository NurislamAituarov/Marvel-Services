export default class Services {
  _offset = 210;
  _offsetComic = 100;
  getServices = async (url) => {
    const result = await fetch(url);
    return await result.json();
  };
  getCharacters(offset = this._offset) {
    return this.getServices(
      `https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=${offset}&apikey=87662d7a0cf658f81a123bab8928e0c4`,
    );
  }
  getCharacter(id) {
    return this.getServices(
      `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=87662d7a0cf658f81a123bab8928e0c4`,
    );
  }
  getComics(offsetComic = this._offsetComic) {
    return this.getServices(
      `https://gateway.marvel.com:443/v1/public/comics?limit=8&offset=${offsetComic}&apikey=87662d7a0cf658f81a123bab8928e0c4`,
    );
  }
  getComic(comicId) {
    return this.getServices(
      `https://gateway.marvel.com:443/v1/public/comics/${comicId}?apikey=87662d7a0cf658f81a123bab8928e0c4`,
    );
  }
  getSearchCharacter(name = 'Thor') {
    return this.getServices(
      `https://gateway.marvel.com:443/v1/public/characters?name=${name}&apikey=87662d7a0cf658f81a123bab8928e0c4`,
    );
  }
}
