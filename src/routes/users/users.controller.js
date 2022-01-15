const { getAllUsers } = require('../../models/users.model');

async function httpGetAllUsers(req, res) {
    const users = await getAllUsers();
    return res.status(200).json(users);
}

module.exports = {
    httpGetAllUsers
}