import axios from 'axios';

class Busquedas{

    historial = ['Madrid', 'San Jose'];

    constructor(){
        //TODO: leer DB si existe
    }

    async ciudad(lugar=''){
        
        try{
            //peticion http
            // console.log('Ciudad', lugar);
            const resp = await axios.get('https://reqres.in/api/users?page=2');

        console.log(resp.data);

        return []; //retornar los lugares 
        }catch(error){
            return [];
        }
    }
}


export {
    Busquedas
}