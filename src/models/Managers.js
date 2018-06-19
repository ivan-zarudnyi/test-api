const Sequelize = require('sequelize');

const Managers = app.db.define('Managers', {
    manager_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    manager_name: Sequelize.STRING,
    manager_title: Sequelize.STRING
}, {timestamps: false});


module.exports = Managers;