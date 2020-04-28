module.exports = {
    PORT: process.env.PORT,
    DB: { // relational DB
        user: 'root',
        password: '',
        database: 'mydb_prod',
        host: 'locahost',
        dialect: 'mysql'
    }
}