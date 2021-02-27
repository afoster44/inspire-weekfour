import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";

function _drawPicture() {
    document.body.style.backgroundImage = `url('${ProxyState.picture}')`
}

export default class ImagesController {
    constructor() {
        ProxyState.on('picture', _drawPicture)
    }
}