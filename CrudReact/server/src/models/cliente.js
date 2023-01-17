const mydb = require('../shared/connections');
const {Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = mydb.sequelize;

//Tabela do banco
module.exports = class Cliente extends Model{
    static init(sequelize, DataTypes){
        return super.init({
            USR_ID: {
                type: Sequelize.INTEGER,
                primaryKey: true,
            },
            USR_TIPO:{
                type: Sequelize.INTEGER,
                allowNull: false,
                notEmpty: true
            },
            USR_NOME:{
                type: Sequelize.STRING,
                trim: true,
                allowNull: false,
                notNull: {msg: 'Nome é obrigatório'}
            },
            USR_EMAIL: {
                type: Sequelize.STRING,
                trim: true,
                allowNull: false,
                notNull: {msg: 'Email obrigatorio'}
            },
            CREATED_AT: { 
                type: Sequelize.DATE, 
                defaultValue: Sequelize.NOW 
            },
            UPDATED_AT: { 
                type: Sequelize.DATE, 
                defaultValue: Sequelize.NOW 
            },
            USR_SENHA: {
                type: Sequelize.STRING,
                notEmpty: true,
                allowNull: false,
                validate: {
                    len: [8, 50],
                    notNull: {msg: 'O uso da senha deve ser obrigatoria'},
                },
                trim: true,
            }
        },
            {
                sequelize,
                freezeTableName: true,
                timestamps: false,
                modelName: 'Usuario'
            });
      
    }
}