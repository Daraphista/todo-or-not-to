import { createTask, deleteTask, editTask, moveTask } from "../js/Task";
import { addDoc, deleteDoc, setDoc } from "firebase/firestore";

jest.mock("firebase/firestore");

describe("Tasks", () => {
  describe("createTask", () => {
    test("calls addDoc()", () => {
      createTask();
      expect(addDoc).toBeCalled();
    });
  });
  describe("editTask", () => {
    test("calls setDoc()", () => {
      editTask();
      expect(setDoc).toBeCalled();
    });
  });
  describe("deleteTask", () => {
    test("calls deleteDoc()", () => {
      deleteTask();
      expect(deleteDoc).toBeCalled();
    });
  });
  describe("moveTask", () => {
    test("copies task in to another container", () => {
      moveTask();
      expect(setDoc).toBeCalled();
    });
    test("deletes original task document", () => {
      moveTask();
      expect(deleteDoc).toBeCalled();
    });
  });
});
