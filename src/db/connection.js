//this file handles connections to a database
const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.MYSQL_URI);

try{
    console.log("\tAuthenticating DB connection...")
    sequelize.authenticate();
    console.log("\tDB Connection authenticated!")
}
catch(error){
    console.log(error)
}


module.exports = sequelize;