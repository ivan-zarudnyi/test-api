module.exports = {

    async create(req, res) {
        const data = req.body;

        if (!data.manager_name) {
            throw {status: 400};
        }

        if (!_.isUndefined(data.manager_id)) {
            throw {status: 400};
        }

        const emp = await Managers.create(data);
        res.json(emp.toJSON());
    },


    async getEmployees(req, res) {
        const manager = await Managers.findById(req.params.manager_id);

        if (!manager) {
            throw {status: 400, message: "Manager not found"};
        }

        const emps = await Employees.findAll({where: {emp_manager_id: req.params.manager_id}});

        res.json(_.map(emps, emp => emp.toJSON()));
    }
};