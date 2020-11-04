const jwt = require('jsonwebtoken');

const send = userId => {
    const signedJwt = jwt.sign(
        {
            _id: userId,
        },
        "dev_key",
        {
            expiresIn: "24h",
        }
    );
    return signedJwt;
}

module.exports = {
    send,
}