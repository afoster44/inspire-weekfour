import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { todoApi } from "./AxiosService.js";


class TodoService {
    constructor() {
        this.getTask()
    }

    async createTask(rawTodo) {
        try {
            const res = await todoApi.post('', rawTodo)
            console.log(res.data);
        } catch (error) {
            console.error(error)
        }
    }

    async getTask() {
        const res = await todoApi.get('')
        console.log(res.data);
        ProxyState.tasks = res.data.map(t => new Task(t))
    }
}

export const todoService = new TodoService();