'use strict';

import App from './class/App.js';
import Todo from './class/Todo.js';

const t1 = new Todo('read a book');
const t2 = new Todo('do sports');

const mainApp = new App();
mainApp.addTodo(t1);
mainApp.addTodo(t2);

// console.log(t1, t2);
