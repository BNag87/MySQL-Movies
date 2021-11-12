const {Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Movie = sequelize.define("Movie", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    actor: {
        type: DataTypes.STRING,
    },
})

const Actor = sequelize.define("Actor", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    actor: {
        type: DataTypes.STRING,
    },
})

module.exports = Movie;