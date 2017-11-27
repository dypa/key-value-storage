"use strict";

class Storage {
    constructor() {
        this.storage = [];
    }

    list() {
        return Object.keys(this.storage);
    }

    get(key) {
        return this.storage[key] ? this.storage[key] : false;
    }

    set(key, value) {
        this.storage[key] = value;

        return value.length;
    }

    del(key) {
        let result = this.storage[key] ? true : false;
        delete this.storage[key];

        return result;
    }
}

module.exports = new Storage;