const app = require('./app');

async function main(){
    await app.listen(4000)
    console.log('Servidor ejecutandose en el puerto 4000');
}

main();