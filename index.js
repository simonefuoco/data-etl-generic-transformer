class Transformer {
    constructor(args) {
        Object.assign(this, args);
    }

    transform(obj) {
        let self = this;
        return new Promise((resolve, reject) => {
            let func = self.callback(obj, self);
            if (Promise.resolve(func) == func) {
                func.then((values) => resolve(values));
            } else {
                resolve(func);
            }
        });
    }
}

module.exports.Transformer = Transformer;