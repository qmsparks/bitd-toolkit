const jwt = require('jsonwebtoken');


/**
 * Receives a valid user ID as an argument and returns a new JWT for persistent auth
 * @function send
 * @param {*} userId 
 */
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