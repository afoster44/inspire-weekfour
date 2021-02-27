export default class Task {
    constructor(data) {
        this.description = data.description
        this.id = data._id || data.id
        this.completed = data.completed || false
    }

    get Template() {
        return /*html*/ `
        <input type="checkbox" class="form-check-input" id="exampleCheck1"><p>${this.description}</p><button class="btn btn-danger text-danger">X</button>
        `
    }
}