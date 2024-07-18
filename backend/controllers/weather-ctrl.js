/**
 * Weather Queries 
 */

/* Read API Key from env */
require('dotenv').config();
const apiKey = process.env.API_KEY;

async function getWeather(req, res) {
    const currentForecastUrl = `https://open-weather13.p.rapidapi.com/city/latlon/${req.params.latitude}/${req.params.longitude}`;
    const futureForecastUrl = `https://open-weather13.p.rapidapi.com/city/fivedaysforcast/${req.params.latitude}/${req.params.longitude}`;

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
        }
    };

    try {
        const weather = {}
    
        let response = await fetch(currentForecastUrl, options);

        // return if response is not ok
        if (!response.ok){
            console.log("response not ok");
            return res.status(response.status).json({
                ok: false,
                error: response.status,
                message: response.statusText
            });
        }

        let result = await response.json();
        
        /* Note that the Open Weather API is inconsistent with the return type 
           sometimes its a number and other times it is a string */
        if (result.cod != 200){
            console.log("result not ok");
            return res.status(result.cod).json({
                ok: false,
                error: result.cod,
                message: result.message
            });
        }

        weather.current_forecast = result;

        response = await fetch(futureForecastUrl, options);

        // return if response is not ok
        if (!response.ok){
            console.log("response not ok");
            return res.status(response.status).json({
                ok: false,
                error: response.status,
                message: response.statusText
            });
        }

        result = await response.json();

        /* Note that the Open Weather API is inconsistent with the return type 
           sometimes its a number and other times it is a string */
        if (result.cod != 200){
            console.log("result not ok");
            return res.status(result.cod).json({
                ok: false,
                error: result.cod,
                message: result.message
            });
        }

        weather.future_forecast = result;

        return res.status(200).json({ 
            ok: true,
            data: weather
        })

    } catch(error) {
        console.log("error: " + error);
        return res.status(503).json({
            ok: false,
            error: 503,
            message: "Service Unavailable"
        });
    }
}

async function getLocation(req, res){
    const url = `https://map-geocoding.p.rapidapi.com/json?address=${req.params.zipcode}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': 'map-geocoding.p.rapidapi.com'
        }
    };

    try{
        const response = await fetch(url, options);

        // return if response is not ok
        if (!response.ok){
            console.log("response not ok");
            return res.status(response.status).json({
                ok: false,
                error: response.status,
                message: response.statusText
            });
        }

        const result = await response.json();
        console.log(result);
        if (result.status !== "OK"){
            console.log("result not ok");
            return res.status(400).json({
                ok: false,
                error: 400,
                message: result.status
            });
        }

        return res.status(200).json({
            ok: true,
            data: result
        });
    }
    catch(error) {
        console.log("error: " + error);
        return res.status(503).json({
            ok: false,
            error: 503,
            message: "Service Unavailable"
        });
    }
}

module.exports = {
    getWeather,
    getLocation
}
