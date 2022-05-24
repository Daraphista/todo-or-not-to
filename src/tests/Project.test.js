import Project, {
  storeProject,
  deleteProject,
  editProject,
} from "../js/Project";

let newProject;

beforeEach(() => {
  newProject = Project("House chores");
});

describe("projects", () => {
  test("can be stored", () => {
    const projectList = [];
    storeProject(newProject, projectList);
    expect(projectList).toContain(newProject);
  });
  test("can be deleted", () => {
    const projectList = [newProject];
    deleteProject(newProject, projectList);
    expect(projectList).not.toContain(newProject);
  });
  test("can be edited", () => {
    editProject(newProject, "title", "Laundry");
    expect(newProject.title).toBe("Laundry");
  });
});
