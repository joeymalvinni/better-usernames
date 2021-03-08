class CategoryNotFoundError extends Error {
    constructor(category) {
        super('The requested category "' + category + '" was not found. If you would like to add "' + category + '" as an absolute string in the username, enable customWords in the settings object.');
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = CategoryNotFoundError;