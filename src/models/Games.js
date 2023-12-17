const {DataTypes} = require("sequelize")
const database = require("../config/database/database")

const Games = database.define("Games", {
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    year:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price:{
        type: DataTypes.FLOAT,
        allowNull: false
    }
})
Games.sync({force:false})


module.exports = Games
