const users = require('./users.mongo');

async function getAllUsers() {
    return await users.find({}, {
        '_id': 0, '__v': 0
    });
}


module.exports = {
    getAllUsers
}