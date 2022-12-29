const db = require("../config/sequelize");
const Sequelize = require ("sequelize");
const sequelize = require("../config/sequelize");

const loginAdmin = db.define("loginAdmin",
{
  id:{
    type:Sequelize.DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  nome:{
    type:Sequelize.DataTypes.STRING (50),
    allowNull:false,
  },
  password:{
    type:Sequelize.DataTypes.STRING(50),
    allowNull:false,
  },
  

},
{
  timestamps:false,
  freezeTableName: true
})

module.exports=loginAdmin;