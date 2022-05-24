const Project = (title, tasklist = []) => {
  return { title, tasklist };
};

const storeProject = (project, array) => {
  array.push(project);
};

const deleteProject = (project, array) => {
  const projectIndex = array.indexOf(project);
  array.splice(projectIndex);
};

const editProject = (project, property, value) => {
  project[property] = value;
};

export default Project;
export { storeProject, deleteProject, editProject };
