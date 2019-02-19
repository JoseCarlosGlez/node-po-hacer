const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    descripcion: 'Marca como completado o pendiente la tarea'
}



const argv = require('yargs')
    .command('crear', 'Crear un elemento', {
        descripcion
    }).command('actualizar', 'Acutualiza el estado de la tarea', {
        descripcion,
        completado
    }).command('borrar', 'borra una tarea', {
        descripcion
    }).command('listar', 'listar tareas por filtro de completado', {
        completado
    })
    .help()
    .argv;


module.exports = {
    argv
}












// Al momento de usar .command el primer parametro que necesita 
//es el comando, el segundo la descripcion y el tercero es el objeto con el cual va a tener las caracteristicas