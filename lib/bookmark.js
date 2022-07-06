class Bookmark {
    constructor(link, note, tags){
        this._link = link;
        this._note = note;
        this._tags = tags;
    }

    get link(){
        return this._link;
    }

    get note(){
        return this._note;
    }

    get tags(){
        return this._tags;
    }
}

const one = new Bookmark('http://www.twitter.com/yohuck', 'generic note', ['test', 'first']);

console.log(one)

console.log(one.tags)