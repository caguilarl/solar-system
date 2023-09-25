import { Sequelize } from 'sequelize-typescript'
import { Planets } from '../models/planets.model'

export const connection = new Sequelize({
    dialect: "mysql",
    port: Number(process.env.MYSQL_DB_PORT),
    host: process.env.MYSQL_DB_HOST,
    username: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PASS,
    database: "solarsystem",
    logging: false,
    models: [
        Planets
    ]
})

async function connectDb() {
    try{
        await connection.sync()
    }catch(error){
        console.log(error)
    }
}

export default connectDb