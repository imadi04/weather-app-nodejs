const request = require('postman-request');
const forecast= (latitude,longitude,callback)=>{
    const url= 'http://api.weatherstack.com/current?access_key=[access_key here]&query='+latitude+','+longitude
    request({url, json:true}, function (error,{body}) {
        if(error)
            callback('Unable to connect',undefined);
        else if(body.error)
            callback('Location not found',undefined);
        else{
        callback(undefined,'Temperature in '+body.location.name+ ' is '+ body.current.temperature+'. And its '+body.current.weather_descriptions[0]+'.');
        } 
    });
}
module.exports=forecast;