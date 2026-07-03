import api from "./api";


// GET ALL EVENTS
export const getEvents = async (query = "") => {
  const response = await api.get(`/events${query}`);
  return response.data;
};

// CREATE EVENT
export const createEvent = async (data) => {
  const response = await api.post("/events", data);
  return response.data;
};