import { createTask, editTask } from "../js/Task";
import { addDoc, setDoc } from "firebase/firestore";

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
});
