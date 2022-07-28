export default class App {
  constructor() {
    this.todoArr = [];
    this.listEl = document.getElementById('list-todo');
    this.inputEl = document.getElementById('new-todo');
    this.addBtnEL = document.getElementById('add-todo');
  }

  addTodo(todo) {
    this.todoArr.push(todo);
    this.render();
    console.log('this.todoArr ===', this.todoArr);
  }

  render() {
    this.listEl.innerHTML = this.todoArr.map((tObj) => `<li>${tObj.title}</li>`).join('');
  }
}
