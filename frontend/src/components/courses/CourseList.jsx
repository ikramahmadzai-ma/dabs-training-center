import { useEffect, useState } from "react";
import { getCourses } from "../../services/courseService";
import CourseCard from "../home/courses/CourseCard";

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const loadCourses = async () => {
      const res = await getCourses();
      setCourses(res.data);
    };

    loadCourses();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-5">All Courses</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;