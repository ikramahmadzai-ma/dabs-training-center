import { useEffect, useState } from "react";
import { getInstructors } from "../../services/instructorService";
import { createCourse } from "../../services/courseService";

const CourseForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    image: "",
    duration: "",
    students: "",
    rating: "",
    instructor_id: "",
    status: true,
  });

  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    const loadInstructors = async () => {
      try {
        const data = await getInstructors();
        setInstructors(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    loadInstructors();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createCourse(formData);

      alert("Course created successfully.");

      setFormData({
        title: "",
        slug: "",
        description: "",
        image: "",
        duration: "",
        students: "",
        rating: "",
        instructor_id: "",
        status: true,
      });
    } catch (error) {
      console.log(error.response.data);

      alert(JSON.stringify(error.response.data, null, 2));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-6">Add New Course</h2>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="title"
          placeholder="Course Title"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="text"
          name="slug"
          placeholder="Slug"
          value={formData.slug}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="text"
          name="duration"
          placeholder="Duration"
          value={formData.duration}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="number"
          name="students"
          placeholder="Students"
          value={formData.students}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="number"
          step="0.1"
          name="rating"
          placeholder="Rating"
          value={formData.rating}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <select
          name="instructor_id"
          value={formData.instructor_id}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">Select Instructor</option>

          {instructors.map((instructor) => (
            <option key={instructor.id} value={instructor.id}>
              {instructor.name}
            </option>
          ))}
        </select>

        <select
          name="status"
          value={formData.status}
          onChange={(e) =>
            setFormData({
              ...formData,
              status: e.target.value === "true", // convert string → boolean
            })
          }
          className="border p-2 rounded"
        >
          <option value="true">true</option>
          <option value="false">false</option>
        </select>

        <textarea
          name="description"
          rows="5"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="border p-2 rounded md:col-span-2"
        ></textarea>

        <button className="bg-[#082A63] hover:bg-[#0d3b8f] text-white py-3 rounded md:col-span-2">
          Save Course
        </button>
      </form>
    </div>
  );
};

export default CourseForm;
