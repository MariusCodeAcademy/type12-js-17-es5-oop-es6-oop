import Todo from './Todo.js';

export default class App {
  constructor() {
    console.log('App constructor ran');
    this.todoArr = [];

    this.initHTMLEl();
    this.initListeners();
  }

  initHTMLEl() {
    console.log('App initHTMLEl ran');

    this.listEl = document.getElementById('list-todo');
    this.inputEl = document.getElementById('new-todo');
    this.addBtnEL = document.getElementById('add-todo');
  }

  initListeners() {
    this.addBtnEL.addEventListener('click', () => {
      this.handleNewTodo();
    });
  }

  handleNewTodo() {
    const newTodoValue = this.inputEl.value;
    const todoObj = new Todo(newTodoValue);
    this.addTodo(todoObj);
    this.inputEl.value = '';
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
