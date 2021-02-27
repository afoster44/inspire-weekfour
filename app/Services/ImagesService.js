import { ProxyState } from "../AppState.js";
import Image from "../Models/Image.js";
import { imagesApi } from "./AxiosService.js";


class ImagesService {
    constructor() {
        this.getMyImages()

    }

    async getMyImages() {
        try {
            let res = await imagesApi.get('');
            console.log(res.data);
            ProxyState.picture = res.data.url
            console.log(ProxyState.picture);
        } catch (error) {
            console.error(error)
        }
    }
}

export const imagesService = new ImagesService();