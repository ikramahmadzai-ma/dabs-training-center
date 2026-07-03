import api from "./api";

export const getInstructors = async () => {
  const response = await api.get("/instructors");
  return response.data;
};

export const getInstructor = async (id) => {
  const response = await api.get(`/instructors/${id}`);
  return response.data;
};