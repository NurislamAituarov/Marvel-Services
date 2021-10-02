
export default class Services {
    _offset = 210;
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

}
