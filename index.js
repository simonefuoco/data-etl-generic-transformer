class Transformer {
    constructor(args) {
        Object.assign(this, args);
    }

    transform(obj) {
        return this.callback(obj, this);
    }
}

module.exports.Transformer = Transformer;