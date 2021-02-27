import { ProxyState } from "../AppState.js";
import { weatherApi } from "./AxiosService.js";


class WeatherService {
    constructor() {
        this.getWeather()
    }

    async getWeather() {
        try {
            const res = await weatherApi.get('')
            console.log(res.data.main);
            ProxyState.temperature = Math.floor((res.data.main.temp - 273.15) * 9 / 5 + 32)
            console.log(ProxyState.temperature);
        } catch (error) {
            console.error(error)
        }
    }
}

export const weatherService = new WeatherService();