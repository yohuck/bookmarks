const today = require('../date-format')

class Bookmark {
    constructor(link, note, tags){
        this._link = link;
        this._note = note;
        this._tags = tags;
        this._processed = false;
        this._dateAdded = today.today
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

    get processed(){
        return this._processed;
    }

    get dateAdded(){
        return this._dateAdded;
    }
}

const name = new Bookmark('http://www.whatever.com', 'Test note', ['hello', 'there']);
console.log(name)
console.log(name.dateAdded)