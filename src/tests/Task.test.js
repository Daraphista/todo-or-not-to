import { Task, storeTask, deleteTask, editTask } from "../js/Task";

let NewTask

beforeEach(() => {
  NewTask = Task("do laundry", "22/05/2022", "description", 1);
})

describe("tasks", () => {
  test("can be stored", () => {
    const taskList = [];
    storeTask(NewTask, taskList);
    expect(taskList).toContain(NewTask);
  });
  test.todo("can be deleted");
  test.todo("can be edited");
})