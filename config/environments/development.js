module.exports = {
    PORT: process.env.PORT || 3000,
    DB: { // relational DB
        user: 'root',
        password: '',
        database: 'mydb_dev',
        host: 'locahost',
        dialect: 'mysql'
    }
}