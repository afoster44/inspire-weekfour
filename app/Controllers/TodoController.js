import { ProxyState } from '../AppState.js'
import { todoService } from '../Services/TodoService.js'


function _drawTask() {
    let tasks = ProxyState.tasks
    let template = ''
    tasks.forEach(t => template += t.Template)

    let elem = document.getElementById('task')
    debugger
    elem.innerHTML = template
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
}