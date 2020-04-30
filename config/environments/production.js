module.exports = {
    PORT: process.env.PORT,
    DB: { // relational DB
        username: 'root',
        password: '',
        database: 'mydb_prod',
        host: 'localhost',
        dialect: 'mysql'
    }
}