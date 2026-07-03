import api from "./api";

export const getTestimonials = async () => {
  const response = await api.get("/testimonials");
  return response.data;
};

export const getTestimonial = async (id) => {
  const response = await api.get(`/testimonials/${id}`);
  return response.data;
};