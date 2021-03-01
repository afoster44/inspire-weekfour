import { ProxyState } from '../AppState.js'
import { todoService } from '../Services/TodoService.js'


function _drawTask() {
    let tasks = ProxyState.tasks
    let template = ''
    tasks.forEach(t => template += t.Template)

    document.getElementById('task').innerHTML = template
}


export default class TodoController {
    constructor() {
        ProxyState.on('tasks', _drawTask)
    }

    createTask(event) {
        event.preventDefault()
        let form = event.target
        let rawTodo = {
            description: form.task.value
        }
        todoService.createTask(rawTodo)
    }

    deleteTask(_id) {
        todoService.deleteTask(_id);
    }
}