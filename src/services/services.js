
export default class Services {
    _offset = 210;
    _offsetComic = 100;
    getServices = async (url) => {
        const result = await fetch(url)
        return await result.json()
    }
    getCharacters(offset = this._offset) {
        return this.getServices(`https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=${offset}&apikey=140972321aad3708a9bba9e320ce9b8b`)
    }
    getCharacter(id) {
        return this.getServices(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=140972321aad3708a9bba9e320ce9b8b`)
    }
    getComics(offsetComic = this._offsetComic){
        return this.getServices(`https://gateway.marvel.com:443/v1/public/comics?limit=8&offset=${offsetComic}&apikey=140972321aad3708a9bba9e320ce9b8b`)
    }
    getComic(comicId){
        return this.getServices(`https://gateway.marvel.com:443/v1/public/comics/${comicId}?apikey=140972321aad3708a9bba9e320ce9b8b`)
    }
    getSearchCharacter(name= 'Thor'){
        return this.getServices(`https://gateway.marvel.com:443/v1/public/characters?name=${name}&apikey=140972321aad3708a9bba9e320ce9b8b`)
    }

}
