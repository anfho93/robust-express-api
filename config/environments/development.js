module.exports = {
    PORT: process.env.PORT || 3000,
    DB: { // relational DB
        username: 'root',
        password: '',
        database: 'mydb_dev',
        host: 'localhost',
        dialect: 'mysql',
        logging: false
    }
}