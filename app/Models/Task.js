export default class Task {
    constructor(data) {
        this.description = data.description
        this._id = data._id || data.id
        this.completed = data.completed || false
    }

    get Template() {
        return /*html*/ `
        <div class="col-12 border shadow bg-light">
        <input type="checkbox" class="form-check-input ml-1" id="exampleCheck1">
        <p class="ml-5">${this.description}</p>
        <button class="btn btn-danger text-danger" onclick="app.todoController.deleteTask('${this._id}')">X</button>
        </div>
        `
    }
}