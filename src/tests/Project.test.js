import Project, { storeProject, deleteProject, editProject } from "../js/Project";

let newProject;

beforeEach(() => {
  newProject = Project("House chores");
})

describe("projects", () => {
  test("can be stored", () => {
    const projectList = [];
    storeProject(newProject, projectList);
    expect(projectList).toContain(newProject);
  });
  test.todo("can be deleted");
  test.todo("can be edited");
});