import api from "./api";

export const getStatistics = async () => {
  const response = await api.get("/statistics");
  return response.data;
};

export const getStatistic = async (id) => {
  const response = await api.get(`/statistics/${id}`);
  return response.data;
};