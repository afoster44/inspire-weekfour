import { ProxyState } from "../AppState.js";
import { quoteApi } from "./AxiosService.js";


class QuoteService {
    constructor() {
        this.getQuote()
    }

    async getQuote() {
        try {
            const res = await quoteApi.get('');
            console.log(res);
            ProxyState.quotes += res.data.content
            ProxyState.author += res.data.author
        } catch (error) {
            console.error(error)
        }
    }
}

export const quoteService = new QuoteService();