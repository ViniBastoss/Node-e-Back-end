import db from "../db";
import { Sequelize as sequelize } from "sequelize"; // <-- A mágica está aqui! Damos o apelido de 'sequelize' minúsculo.

export default db.define("client", {
    id: {
        type: sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    
    nome: {
        type: sequelize.STRING,
        allowNull: false
    },
    
    email: {
        type: sequelize.STRING,
        allowNull: false
    }
});