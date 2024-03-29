import { httpAxios } from "@/helper/helper";

export const Register = async (userData) => {
  try {
    const result = await httpAxios.post("/api/users", userData);
    return result.data;
  } catch (error) {
    throw new Error("An error occurred during registration.");
  }
};

export async function login(loginData) {
  const result = await httpAxios
    .post("/api/login", loginData)
    .then((response) => response.data);
  return result;
}

export async function currentUser() {
  const result = await httpAxios
    .get("/api/current")
    .then((response) => response.data);
  return result;
}



export async function logout() {
  const result = await httpAxios
    .post("/api/logout")
    .then((response) => response.data);
  return result;
}
