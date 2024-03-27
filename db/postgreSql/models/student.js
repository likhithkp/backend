
module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define('Student', {
        firstName : {
            type: DataTypes.STRING,
            allowNull :false
        },
        lastName : {
            type: DataTypes.STRING,
            allowNull :false
        },
        age :{
            type: DataTypes.INTEGER,
            allowNull :false
        },
        gender : {
            type: DataTypes.STRING,
            allowNull :false
        },
        studentId:{
            type: DataTypes.UUID,
            allowNull :false
        }
    });

    sequelize.sync();
    return Student;
}