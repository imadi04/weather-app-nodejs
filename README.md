# weather-app-nodejs
A simple **Weather forecasting app** using **nodejs** and **express**.
Using **hbs (handlebars)** as the default view engine.

### **API** used:
* Mapbox API
* Weatherstack API

Website simply takes desired address in a text field, this address is then used to fetch latitude and longitude of that particular place using Mapbox API.
Latitude and longitude fetched from mapbox API is used in weatherstack API to fetch the current weather details of the given location.
