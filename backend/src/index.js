const app = require('./app');

async function main(){
    await app.listen(4000)
    console.log('Servidor ejecutandose en puerto 4000');
}

main();