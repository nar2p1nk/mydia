const {Client} = require('pg');

require('dotenv').config();

passwrd = process.env.POOL_PASSWORD;


const client = new Client({
    user: 'enemy',
    password: passwrd,
    host: 'localhost',
    database: 'mydia',
    port:5432,

});

client.connect()
