const httpStatusCodes = require('http-status-codes');

const handleErrors = (err, req, res, next) => {
    const { message, payload, statusCode = httpStatusCodes.INTERNAL_SERVER_ERROR } = err;
    const body = payload || {
        status: statusCode,
        error: message,
    };

    res.status(statusCode).json(body);
};

module.exports = handleErrors;