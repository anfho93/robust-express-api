module.exports = {
    PORT: process.env.PORT,
    DB: { // relational DB
        username: 'root',
        password: process.env.DB_PASSWORD || '',
        database: 'mydb_qa',
        host: 'localhost',
        dialect: 'mysql'
    }
}