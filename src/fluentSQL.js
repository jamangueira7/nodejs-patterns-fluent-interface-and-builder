export default class FluentSQLBluider {
    #database = [];
    #limit = 0;
    #select = [];
    #where = [];
    #orderBy = [];

    constructor({ database }) {
        this.#database = database;
    }

    static for(database) {
        return new FluentSQLBluider({ database });
    }

    limit(max) {
        this.#limit = max;

        return this;
    }

    select(props) {
        this.#select = props;

        return this;
    }

    where(query) {
        this.#where = query;

        return this;
    }

    orderBy(field) {
        this.#orderBy = field;

        return this;
    }

    #performLimit(results) {
        return this.#limit && results.length === this.#limit;
    }

    bluid() {
        const results = [];

        for (const item of this.#database) {
            results.push(item);

            if(this.#performLimit(results)) {
                break;
            }
        }

        return results;
    }

}
