import { useState } from "react";
import { createEvent } from "../../services/eventService";

const EventForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    day: "",
    month: "",
    time: "",
    location: "",
    description: "",
    status: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === "status" ? value === "true" : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createEvent(formData);
      alert("Event created successfully");

      setFormData({
        title: "",
        day: "",
        month: "",
        time: "",
        location: "",
        description: "",
        status: true,
      });
    } catch (error) {
      console.log(error.response?.data);
      alert("Error creating event");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
      <input name="title" placeholder="Title" onChange={handleChange} className="border p-2 rounded" />

      <input name="day" type="number" placeholder="Day" onChange={handleChange} className="border p-2 rounded" />

      <input name="month" placeholder="Month" onChange={handleChange} className="border p-2 rounded" />

      <input name="time" placeholder="Time" onChange={handleChange} className="border p-2 rounded" />

      <input name="location" placeholder="Location" onChange={handleChange} className="border p-2 rounded" />

      <select name="status" onChange={handleChange} className="border p-2 rounded">
        <option value="true">Active</option>
        <option value="false">Inactive</option>
      </select>

      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
        className="border p-2 md:col-span-2 rounded"
      />

      <button className="bg-[#082A63] text-white p-3 md:col-span-2 rounded">
        Save Event
      </button>
    </form>
  );
};

export default EventForm;