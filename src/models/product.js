const db = require("../config/sequelize");
const Sequelize = require ("sequelize");
const sequelize = require("../config/sequelize");



const product = db.define("product",{
    id:{
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        autoIncrement:true,
        primaryKey:true,
    },
    productName:{
        type:Sequelize.DataTypes.STRING(50),
        allowNull:false,
    },
    productDesc:{
        type:Sequelize.DataTypes.STRING(100),
        allowNull:false,
    },
    productQuant:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false,
    },
    productMark:{
        type:Sequelize.DataTypes.STRING(50),
        allowNull:false,
    }
},
{
    timestamps:false,
    freezeTableName: true
})

module.exports = product;