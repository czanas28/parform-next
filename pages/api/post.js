import { DataTypes, Model } from 'sequelize';
import sql from '../../globals/dbconnection';

export default async function handler(req, res) {

    const data = JSON.parse(req.body);

    const { values, parform } = data;

    const tableDefinition = {} ;

    for(const value in values) {
        tableDefinition[value] = DataTypes.TEXT
    }

    const FormSubmission = sql.define(parform, tableDefinition);
    
    await FormSubmission.sync({ alter: true });

    await parform.create(values)
    
    res.send();
    // const test = await form.create(values);

        // try {
        //     await sql.authenticate();
        //     console.log('Connection has been established successfully.');
        // } catch (error) {
        //     console.error('Unable to connect to the database:', error);
        // }
        // sql.close();
}