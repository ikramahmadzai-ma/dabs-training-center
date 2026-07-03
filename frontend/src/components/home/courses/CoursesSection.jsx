import { useEffect, useState } from "react";
import { getCourses } from "../../../services/courseService";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
function CoursesSection() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await getCourses("?limit=5");

        setCourses(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCourses();
  }, []);


  return (
    <section className="mt-12 bg-white" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-5">
          <div className="text-center sm:text-left">
            <p className="text-[#F59E0B] font-bold uppercase">Our Courses</p>

            <h2 className="text-[18px] sm:text-[20px] font-bold text-[#082A63]">
              We Do What We Love To Do. Find the Best Course to Fit Your Needs.
            </h2>
          </div>

          <Link to="/courses">
            <button className="hidden sm:block border hover:border-0 hover:cursor-pointer hover:text-black hover:bg-amber-500 border-[#082A63] px-5 py-2 rounded text-[#082A63] font-medium">
              View All Courses
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link to="/courses">
            <button className="w-full border hover:border-0 hover:cursor-pointer hover:text-black hover:bg-amber-500 border-[#082A63] px-5 py-2 rounded text-[#082A63] font-medium">
              View All Courses
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CoursesSection;
