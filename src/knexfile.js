const { host, database, user, password } = require('./.env')

module.exports = {

    client: 'mysql',
    connection: {
      host : host,
      database: database,
      user:     user,
      password: password
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }    
};
