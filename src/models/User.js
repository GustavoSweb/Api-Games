const {DataTypes} = require("sequelize")
const database = require("../config/database/database")

const User = database.define("User", {
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false

    },
    password:{
        type: DataTypes.STRING,
        allowNull: false

    }
})

User.sync({force:false})
module.exports = User 