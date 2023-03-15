import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { inquirerMenu, leerInput, listarLugares, pausa } from "./helpers/inquirer.js";
import { Busquedas } from "./models/busquedas.js";
dotenv.config()


const main = async() =>{
    
    let opt = '';
    const buquedas = new Busquedas();

    do{
        opt = await inquirerMenu();

        switch(opt){
            case 1:
                //Mostrar mensaje
                const termino = await leerInput('Ciudad: ');

                //Buscar los lugares
                const lugares = await buquedas.ciudad(termino);

                //Seleccionar el lugar
                const id = await listarLugares(lugares);
                const lugarSel = lugares.find( l => l.id === id);

                //Clima
                const clima = await buquedas.climaLugar(lugarSel.lat, lugarSel.lng);

                //Mostar datos del clima
                console.log('\nInformacion de la ciudad\n'.green);
                console.log('Ciudad:', lugarSel.nombre);
                console.log('Lat:', lugarSel.lat);
                console.log('Lng:', lugarSel.lng);
                console.log('Temperatura:', clima.temp);
                console.log('Minima:', clima.min);
                console.log('Maxima:', clima.max);
                console.log('Como esta el clima:', clima.desc);

                break;
        }

        if(opt !== 0) await pausa();

    }while(opt !== 0);
}

main();