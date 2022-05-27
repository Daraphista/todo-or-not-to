import { createTask } from "../js/Task";
import { addDoc } from "firebase/firestore";

jest.mock("firebase/firestore");

describe("Tasks", () => {
  describe("createTask", () => {
    test("calls addDoc()", () => {
      createTask();
      expect(addDoc).toBeCalled();
    });
  });
});
