import inquirer from 'inquirer';
import colors from 'colors';

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [
            {
                value: 1,
                name: `${'1.'.green} Buscar ciudad`
            },
            {
                value: 2,
                name: `${'2.'.green} Historial`
            },
            {
                value: 0,
                name: `${'3.'.green} Salir`
            }
        ]
    }
];

//Crea el menu y nos permite seleccionar una opcion
const inquirerMenu = async() => {
    
    console.clear();
    console.log('=========================='.green);
    console.log('=  Selecione una opcion  ='.green)
    console.log('==========================\n'.green);

    const {opcion} = await inquirer.prompt(preguntas);

    return opcion;
}

//Pause la ejecucion hasta el enter
const pausa = async() => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'ENTER'.green} para continuar`
        }
    ];

    console.log('\n');
    await inquirer.prompt(question);
}

//funcion para entrar la descripcion de una tarea
const leerInput = async(message) =>{
    
    const question = [
        {
            type: 'input',
            name: 'desc',
            message: message,
            validate(value){
                if(value.length === 0){
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const {desc}  = await inquirer.prompt(question);
    return desc;
}

const listadoTareasBorrar = async(tareas = []) => {

    const choices = tareas.map((tarea, i) => {

        const idx = `${i+1}.`.green;

        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar'
    });

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices: choices
        }
    ];

    const {id} = await inquirer.prompt(preguntas);
    return id;
}

const confirmar = async (message) => {

    const question = [
        {
            type:'confirm',
            name: 'ok',
            message: message
        }
    ]

    const {ok} = await inquirer.prompt(question);
    return ok;
}

const mostrarListadoCheckList = async(tareas = []) => {

    const choices = tareas.map((tarea, i) => {

        const idx = `${i+1}.`.green;

        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: (tarea.completadoEn) ? true : false
        }
    });

    const preguntas = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccione',
            choices: choices
        }
    ];

    const {ids} = await inquirer.prompt(preguntas);
    return ids;
}

export { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoCheckList };