const fs = require('fs');


let listadoPorHacer = [];

const crear = (descripcion) => {

    cargarDB();


    let porHacer = {
        descripcion,
        completado: false,
    };
    listadoPorHacer.push(porHacer);
    guardarDb();
    return porHacer;
}

const guardarDb = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (error) => {
        if (error) {
            console.log(error);
        } else {}
    })
}


const getListado = (completados) => {



    if (completados == "true") {
        completados = 1;
    } else {
        completados = 0;
    }

    cargarDB();

    let listadoFiltrado = listadoPorHacer.filter(tarea => {
        return tarea.completado == completados;

    })


    return listadoFiltrado;


}


const cargarDB = () => {

    try {
        listadoPorHacer = require('./../db/data.json');

    } catch (error) {
        console.log(error);
        listadoPorHacer = [];
    }


}


const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDb();
        return true;
    } else {
        return false;
    }
}


const borrar = (descripcion) => {

    cargarDB();

    let nuevolistado = listadoPorHacer.filter(tarea => {

        return tarea.descripcion !== descripcion;

    })

    if (listadoPorHacer.length === nuevolistado.length) {
        return false;
    } else {
        listadoPorHacer = nuevolistado;
        guardarDb();
        return true;
    }

}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}