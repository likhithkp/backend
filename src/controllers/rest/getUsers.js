const db = require("../../../db/postgreSql/models/index")

const getAllUsers = async (req,res) => {
    const user = await db.User.findAll();
    res.send(user)
}

module.exports = getAllUsers;