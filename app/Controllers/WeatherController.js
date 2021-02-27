import { ProxyState } from "../AppState.js"
import { weatherService } from "../Services/WeatherService.js"


function _drawTemp() {
    document.getElementById('weather').innerHTML = `<p>${ProxyState.temperature}F </p>`
}

export default class WeatherController {
    constructor() {
        ProxyState.on('temperature', _drawTemp)
    }
}