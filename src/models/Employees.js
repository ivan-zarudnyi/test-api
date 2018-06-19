const Sequelize = require('sequelize');
const Managers = require('./Managers');

const Emps = app.db.define('Emps', {
    emp_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    emp_name: Sequelize.STRING,
    emp_manager_id: Sequelize.INTEGER
}, {timestamps: false});

Emps.belongsTo(Managers, {foreignKey: "emp_manager_id"});

module.exports = Emps;