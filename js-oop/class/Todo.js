export default class Todo {
  constructor(newTitle) {
    this.title = newTitle;
    this.done = false;
    this.timeStamp = new Date();
  }
}
