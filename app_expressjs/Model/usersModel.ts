import db from "../db";
import { Sequelize as sequelize } from "sequelize"; // <-- A mágica está aqui! Damos o apelido de 'sequelize' minúsculo.

export default db.define("user", {
    id: {
        type: sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    
    user: {
        type: sequelize.STRING,
        allowNull: false
    },
    
    password: {
        type: sequelize.STRING,
        allowNull: false
    }
});