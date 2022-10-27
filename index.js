const debug = require('debug')('app:main');

const { Config } = require('./src/config/index');
const { app } = require('./src/app');

app.listen(Config.port, ()=>{
    debug(`Servidor escuchando en el puerto ${Config.port}`);
})

