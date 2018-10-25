module.exports.transform = function (args) {
    const {Transform} = require('stream');
    return new Transform({
        readableObjectMode: true,
        writeableObjectMode: true,
        transform(chunk, encoding, callback) {
            this.push(args.callback(chunk, args));
            callback();
        }
    });
}