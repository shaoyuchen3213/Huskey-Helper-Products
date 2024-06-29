require('dotenv').config();
const {Client} = require('pg');

const client = new Client(
    {
        user: process.env.DB_USENAME,
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT
    }
)

client.connect()
    .then(() => {
        console.log('Connect to PostgreSQL database!');
    })
    .catch((err) => {
        console.error('Error connecting to the database:', err)
    });


module.exports = client;