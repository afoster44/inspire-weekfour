import { ProxyState } from '../AppState.js';
import { quoteService } from '../Services/QuoteService.js'


function _drawQuote() {
    let template = ''
    template += `<p>${ProxyState.quotes}</p>`
    template += `<p>${ProxyState.author}</p>`
    document.getElementById('quote').innerHTML = template
}

export default class QuoteController {
    constructor() {
        console.log('quote controller');
        ProxyState.on('quotes', _drawQuote)
        ProxyState.on('author', _drawQuote)
    }
}