import { httpAxios } from "@/helper/helper";

export async function addTask(task) {
  const result = await httpAxios
    .post("/api/projects", task)
    .then((response) => response.data);
  return result;
}

export async function getTasksOfUser(userId) {
  const result = await httpAxios
    .get(`/api/users/${userId}/projects`)
    .then((response) => response.data);
  return result;
}

export async function deleteProject(projectId) {
  const result = await httpAxios
    .delete(`/api/projects/${projectId}`)
    .then((response) => response.data);
  return result;
}
