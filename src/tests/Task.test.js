import { createTask, deleteTask, editTask } from "../js/Task";
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
});
