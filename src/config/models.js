
module.exports  = async app =>{
    app.models = require('require-all')({
        dirname     :  __dirname + '/../models',
        recursive   : false
    });

    _.forOwn(app.models, (model, name)=>{
        global[name] = model;
    });

    await app.db.sync();
};
