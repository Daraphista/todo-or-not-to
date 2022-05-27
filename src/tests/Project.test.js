import { addDoc, setDoc } from "firebase/firestore";
import { createProject, editProject } from "../js/Project";

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

  describe("editProject", () => {
    test("calls setDoc()", () => {
      editProject();
      expect(setDoc).toBeCalled();
    });
    test("calls the setDoc() function with arguments from editProject", () => {
      const document = {};
      const updatedDocument = {};
      editProject(document, updatedDocument);
      expect(setDoc).toBeCalledWith(document, updatedDocument, { merge: true });
    });
  });
});
