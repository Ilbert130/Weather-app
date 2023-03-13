import { inquirerMenu, leerInput, pausa } from "./helpers/inquirer.js";
import { Busquedas } from "./models/busquedas.js";


const main = async() =>{
    
    let opt = '';
    const buquedas = new Busquedas();

    do{
        opt = await inquirerMenu();
        console.log(opt);

        switch(opt){
            case 1:
                //Mostrar mensaje

                //Buscar los lugares

                //Seleccionar el lugar

                //Clima

                //Mostar datos del clima
                break
        }

        if(opt !== 0) await pausa();

    }while(opt !== 0);
}

main();