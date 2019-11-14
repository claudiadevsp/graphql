const { password } = require('./.env')

module.exports = {

    client: 'mysql',
    connection: {
      host : 'training_proj.mysql.dbaas.com.br',
      database: 'training_proj',
      user:     'training_proj',
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
