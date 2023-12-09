import { Connection } from "mysql2/typings/mysql/lib/Connection"

var mysql = require("mysql2")

const banco = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123',
    port: 5000,
    database: 'Bicentenario',
    waitForConnections: true,
    connectionLimit: 10
})  

export default banco