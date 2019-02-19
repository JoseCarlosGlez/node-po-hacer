// primer paso require yargs
const argv = require('./config/yargs').argv;

const colors = require('colors');

let comando = argv._[0]; //trae el dato del primer lugar.

const porHacer = require('./por-hacer/por-hacer');



//realizar comandos para yargs
switch (comando) {
    case 'crear':

        let tarea = porHacer.crear(argv.descripcion);

        console.log(tarea);
        break;


    case 'listar':

        let listado = porHacer.getListado(argv.completado);




        for (let tarea of listado) {
            console.log('================================'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('================================'.green);
        }

        break;


    case 'actualizar':

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);

        break;

    default:
        console.log('Comando no reconocido');
}