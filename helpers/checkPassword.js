const bcrypt = require('bcrypt');

module.exports = (password, hash) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, function (err, result) {
            if (err) return reject(err);
            return resolve(result);
        });
    });
};
