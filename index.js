import { inquirerMenu, leerInput, pausa } from "./helpers/inquirer.js";
import { Busquedas } from "./models/busquedas.js";


const main = async() =>{
    
    let opt = '';
    const buquedas = new Busquedas();

    do{
        opt = await inquirerMenu();

        switch(opt){
            case 1:
                //Mostrar mensaje
                const lugar = await leerInput('Ciudad: ');
                await buquedas.ciudad(lugar)

                //Buscar los lugares

                //Seleccionar el lugar

                //Clima

                //Mostar datos del clima
                console.log('\nInformacion de la ciudad\n'.green);
                console.log('Ciudad:', );
                console.log('Lat:', );
                console.log('Lng:', );
                console.log('Temperatura:', );
                console.log('Minima:', );
                console.log('Maxima:', );

                break
        }

        if(opt !== 0) await pausa();

    }while(opt !== 0);
}

main();