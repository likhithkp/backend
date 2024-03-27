const db = require("../../../db/postgreSql/models/index")

const getAllStudents = async (req,res) => {
    const Student = await db.Student.findAll();
    res.send(Student)
}

module.exports = getAllStudents;