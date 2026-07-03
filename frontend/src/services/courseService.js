import api from "./api";

export const getCourses = async (query = "") => {
  const response = await api.get(`/courses${query}`);
  return response.data;
};


export const createCourse = async (courseData) => {
  const response = await api.post("/courses", courseData);
  return response.data;
};
