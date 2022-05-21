import { Task, storeTask, deleteTask, editTask } from "../js/Task";

let NewTask

beforeEach(() => {
  NewTask = Task("do laundry", "22/05/2022", "high", "description");
})

describe("tasks", () => {
  test("can be stored", () => {
    const taskList = [];
    storeTask(NewTask, taskList);
    expect(taskList).toContain(NewTask);
  });
  test("can be deleted", () => {
    const taskList = [NewTask];
    deleteTask(NewTask, taskList);
    expect(taskList).not.toContain(NewTask);
  });
  test("can be edited", () => {
    editTask(NewTask, "priority", "low");
    expect(NewTask.priority).toBe("low");
  });
})