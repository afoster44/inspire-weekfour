import ImagesController from "./Controllers/ImagesController.js";
import QuoteController from "./Controllers/QuoteController.js";
import TodoController from "./Controllers/TodoController.js";
import WeatherController from "./Controllers/WeatherController.js";


class App {

    imagesController = new ImagesController();
    weatherController = new WeatherController();
    quoteController = new QuoteController();

    todoController = new TodoController();
}

window["app"] = new App();
