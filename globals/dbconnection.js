import { Sequelize } from 'sequelize';

const sql = new Sequelize(process.env.DB, process.env.DB_UN, process.env.DB_PW, {
    host: process.env.SQLSVR,
    dialect: 'mssql',
    logging: false,
    dialectOptions: {
        options: {
            instanceName: 'DEV02'
        }
    },
});

export default sql;