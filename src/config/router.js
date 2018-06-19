const serializeError = require('serialize-error');

module.exports = async app=>{
    const routes = require('../routes');
    app.controllers = require('require-all')({
        dirname     :  __dirname + '/../controllers',
        recursive   : false
    });

    _.forOwn(routes, (options, routeString)=>{
        const method = _.first(routeString.split(' ')).toLowerCase();
        const route = _.last(routeString.split(' '));

        const controller = app.controllers[options.controller];

        if (!controller) {
            app.log.error(`Controller "${options.controller}" not found`);
            return;
        }

        if (!controller[options.method]) {
            app.log.error(`Method "${options.method}" not found in controller "${options.controller}"`);
            return;
        }

        app[method](route, (req, res, next)=>{
             controller[options.method](req, res).then(next).catch(next);
        });
    });

    app.use((err, req, res, next)=>{
        app.log.error(err);
        if (res.headersSent) {
            return next(err);
        }
        res.status(err.status || 500);
        res.json(serializeError(err));
    });

};