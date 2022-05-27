import { addDoc, setDoc, deleteDoc } from "firebase/firestore";
import { createProject, deleteProject, editProject } from "../js/Project";

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

  describe("deleteProject", () => {
    let document;

    beforeEach(() => {
      document = {
        _key: { path: { segments: { join: function () {} } } },
      };
    });

    test("calls deleteDoc()", () => {
      deleteProject(document);
      expect(deleteDoc).toBeCalled();
    });
    test("calls deleteDoc() with arguments from deleteProject", () => {
      deleteProject(document);
      expect(deleteDoc).toBeCalledWith(document);
    });
  });
});
