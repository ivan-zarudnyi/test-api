module.exports = {

    async item(req, res) {
        const id = req.params.emp_id;

        if (!id) {
            throw {status: 400};
        }
        const emp = await Employees.findById(id);
        res.json(emp.toJSON());
    },


    async find(req, res) {
        const emps = await Employees.findAll({where: req.params});

        res.json(emps);
    },


    async create(req, res) {
        const data = req.body;

        if (!data.emp_name) {
            throw {status: 400};
        }

        if (!_.isUndefined(data.emp_id)) {
            throw {status: 400};
        }

        const emp = await Employees.create(data);
        res.json(emp.toJSON());
    }
};