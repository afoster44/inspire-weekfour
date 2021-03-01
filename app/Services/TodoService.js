import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { todoApi } from "./AxiosService.js";


class TodoService {
    constructor() {
        this.getTask()
    }

    async createTask(rawTodo) {
        try {
            const res = await todoApi.post('foster/todos', rawTodo)
            console.log(res.data);
            this.getTask()
        } catch (error) {
            console.error(error)
        }
    }

    async getTask() {
        const res = await todoApi.get('foster/todos')
        console.log(res.data);

        ProxyState.tasks = res.data.map(t => new Task(t))
    }

    //had to debug my delete for about 30 minutes...I thought that delete took in multiple arguments but it does not. Should get in the habbit of making one single api call and using the ' ' to append the url i would like....this gave me issues when I got to my delete because I tried to pass the id as a second argument...didnt like that at all
    async deleteTask(_id) {
        try {
            const res = await todoApi.delete(`foster/todos/${_id}`)
            this.getTask();
        } catch (error) {
            console.error(error)
        }
    }

}

export const todoService = new TodoService();