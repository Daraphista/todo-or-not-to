import { addDoc } from "firebase/firestore";
import { createProject } from "../js/Project";

jest.mock("firebase/firestore");

describe("Projects", () => {
  describe("createProject", () => {
    test("calls the addDoc() function", () => {
      createProject();

      expect(addDoc).toBeCalled();
    });

    test("calls the addDoc() function with the right arguments", () => {
      const collection = {};
      const title = "";

      createProject(collection, title);

      expect(addDoc).toHaveBeenCalledWith(collection, { title: title });
    });
  });
});
