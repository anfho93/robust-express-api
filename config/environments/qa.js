module.exports = {
    PORT: process.env.PORT,
    DB: { // relational DB
        user: 'root',
        password: process.env.DB_PASSWORD || '',
        database: 'mydb_qa',
        host: 'locahost',
        dialect: 'mysql'
    }
}