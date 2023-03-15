import axios from 'axios';

class Busquedas{

    historial = ['Madrid', 'San Jose'];

    constructor(){
        //TODO: leer DB si existe
    }

    get paramsMapbox(){
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es'
        }
    }

    async ciudad(lugar=''){
        
        try{
            //peticion http

            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/
                ${lugar}.json`,
                params: this.paramsMapbox
            });

            const resp = await instance.get();
            return resp.data.features.map(lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1]
            }));

        }catch(error){

            return [];
        }
    }

    async climaLugar(lat, lon){
        try{

            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: {
                    'appid': process.env.OPENWEATHER_KEY,
                    'units': 'metric',
                    'lang': 'es',
                    'lat': lat,
                    'lon': lon
                }
            });

            const resp = await instance.get();
            return {
                desc: resp.data.weather[0].description,
                min: resp.data.main.temp_min,
                max: resp.data.main.temp_max,
                temp: resp.data.main.temp
            }

        }catch(error){
            console.log(error);
        }
    }
}


export {
    Busquedas
}