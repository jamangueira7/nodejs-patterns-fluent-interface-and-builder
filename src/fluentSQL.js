export default class FluentSQLBluider {
    #database = [];

    constructor({ database }) {
        this.#database = database;
    }

    static for(database) {
        return new FluentSQLBluider({ database });
    }

    bluid() {
        const results = [];

        return results;
    }

}
