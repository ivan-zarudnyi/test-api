module.exports = async app =>{
    const Sequelize = require('sequelize');
    const sequelize = new Sequelize('database', '', '', {
        dialect: 'sqlite',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        logging: false,
        storage: 'db/database.sqlite'
    });

    app.db = sequelize;
};

